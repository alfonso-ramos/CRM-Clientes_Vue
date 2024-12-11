import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_DB_URL
})

export default api