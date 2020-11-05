import axios from 'axios'
import { headers } from './config'

const instance = axios.create({
    baseURL: process.env.BASE_URL,
    headers: { ...headers },
    timeout: 1000
})

instance.interceptors.request.use(
    (config) => {
        // 发送请求前做什么
        Object.assign(config.headers, { 'Content-Type': 'application/json' })
        return config
    },
    (error) => {
        console.log('error', error)
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        // 对响应数据做点事
        console.log('response', response)
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance