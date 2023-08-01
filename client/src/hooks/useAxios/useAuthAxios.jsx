import axios from 'axios'

export default function useAuthAxios() {
    const Token = window.localStorage.getItem("token")

    const authAxiosInstance = axios.create({
    baseURL: 'http://localhost:1707',
    headers: {
        'Authorization': Token,
        'Content-type': 'application/json'
    }})

    return authAxiosInstance;
}