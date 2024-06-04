import axios from 'axios';
import loginUtil from '../util/login.js';

export const customizedAxios = axios.create({
    baseURL: 'https://kcs.zolang.store',
    headers: {
        "Authorization": "Bearer " + loginUtil.getAccessToken(),
        "withCredentials": true,
    },
});

const getAccessTokenPromise = () => {
    return new Promise((resolve, reject) => {
        try {
            const accessToken = loginUtil.getRefreshToken();
            resolve(accessToken);
        } catch (err) {
            reject(err);
        }
    });
};

const calculateDelay = (retryCount) => {
    // Adjust base and exponent as needed
    const baseDelay = 1000; // 1 second
    const exponent = 2;
    return baseDelay * Math.pow(exponent, retryCount);
};

// 응답 인터셉터
customizedAxios.interceptors.response.use(async function (response) {
    // 2xx 범위에 있는 상태 코드인 경우
    return response;
}, async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const newAccessToken = await getAccessTokenPromise();
            if (newAccessToken) {
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                const delay = calculateDelay(0);
                await new Promise((resolve) => setTimeout(resolve, delay));
                return customizedAxios(originalRequest);
            } else {
                // Access token retrieval failed (e.g., expired or invalid refresh token)
                throw new Error('Failed to retrieve access token');
            }
        } catch (err) {
            // Refresh token also failed, delete cookies and logout
            loginUtil.logout()
            return Promise.reject(err);
        }
    }
    return Promise.reject(error);
});