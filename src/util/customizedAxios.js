import axios from 'axios';
import loginUtil from '../util/login.js';
import {Cookies} from "react-cookie";

const cookies = new Cookies();
export const customizedAxios = axios.create({
    baseURL: 'https://kcs.zolang.store',
    headers: {
        "withCredentials": true,
    },
});

const getAccessTokenPromise = () => {
    return new Promise((resolve, reject) => {
        try {
            const accessToken = cookies.get('refresh_token')
            resolve(accessToken);
        } catch (err) {
            reject(err);
        }
    });
};

// 요청 인터셉터
customizedAxios.interceptors.request.use(
    config => {
        // 쿠키에서 access_token 가져오기
        const accessToken = cookies.get('access_token');

        // access_token이 있으면 헤더에 추가
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => {
        // 요청 오류가 있는 경우 처리
        return Promise.reject(error);
    }
);

// 응답 인터셉터
customizedAxios.interceptors.response.use(async function (response) {
    // 2xx 범위에 있는 상태 코드인 경우
    return response;
}, async error => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const newAccessToken = await getAccessTokenPromise();
            if (newAccessToken) {
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                await new Promise((resolve) => setTimeout(resolve, 1000));
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