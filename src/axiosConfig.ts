import axios from "axios";

const axiosAuth = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
    timeout: 10000
});

axiosAuth.interceptors.request.use((config) => {
    const access_token = localStorage.getItem("access_token")
    //const refresh_token = localStorage.getItem("refresh_token")
    if (access_token) {
        config.headers.Authorization = "Bearer " + access_token
    }
    return config
})

const axiosUnauth = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
    timeout: 10000
});

export { axiosAuth, axiosUnauth };