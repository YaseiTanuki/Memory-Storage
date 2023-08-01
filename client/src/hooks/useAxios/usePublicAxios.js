import axios from 'axios'

export default function usePublicAxios() {
    
    const publicAxios = axios.create({
    baseURL: 'http://localhost:1707',
    headers: {
        'Content-type': 'application/json'
    },
    })
    return publicAxios;
}
