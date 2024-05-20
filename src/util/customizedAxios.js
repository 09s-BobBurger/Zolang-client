import axios from 'axios';

export const cusomizedAxios = axios.create({
    // baseURL: 'https://kcs.zolang.site',
    baseURL: 'http://localhost:8080',
});