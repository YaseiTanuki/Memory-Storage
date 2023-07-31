import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:1707',
    headers: {
        'Content-type': 'application/json'
    },
})