import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api'

export function http() {
    return axios.create({
        baseURL: BASE_URL
    });
}

export function httpFile() {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}