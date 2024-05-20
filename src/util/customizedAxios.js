import axios from 'axios';

export const cusomizedAxios = axios.create({
    // baseURL: 'https://zolang.site',
    baseURL: 'http://localhost:8080',
});