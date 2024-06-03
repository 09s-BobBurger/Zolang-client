import axios from 'axios';
import loginUtil from '../util/login.js';

export const customizedAxios = axios.create({
    // baseURL: 'https://zolang.site',
    // baseURL: 'http://localhost:8080',
    baseURL: 'https://kcs.zolang.store',
    // baseURL: 'https://kcs.zolang.site',
    headers: {
        Authorization : "Bearer " + loginUtil.getAccessToken(),
        "withCredentials": true,
    },
});