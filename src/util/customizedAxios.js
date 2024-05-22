import axios from 'axios';

export const customizedAxios = axios.create({
    // baseURL: 'https://zolang.site',
    // baseURL: 'http://localhost:8080',
    baseURL: 'https://kcs.zolang.site'
});