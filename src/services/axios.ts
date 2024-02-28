import axios from 'axios'
import { getCookie } from 'cookies-next'

export const getAPIClient = () => {
    const token = getCookie('shcd.token')

    const api = axios.create({
        baseURL: process.env.API_URL
    })

    api.interceptors.request.use((config) => {
        return config
    })

    if (token) {
        api.defaults.headers['Authorizatin'] = `Bearer ${token}`
    }

    return api
}