import axios from 'axios'
import type {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError
} from 'axios'
import { BASE_URL, TIME_OUT } from './config'

// 创建实例时配置默认值
const service: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // 在发送请求之前做些什么
    return config
  },
  function (error: AxiosError) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response: AxiosResponse) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  },
  function (error: AxiosError) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

const http = {
  get<T = any>(url: string, config?: T & AxiosRequestConfig): Promise<T> {
    return service.get(url, config)
  },

  post<T = any>(
    url: string,
    data?: object,
    config?: T & AxiosRequestConfig
  ): Promise<T> {
    return service.post(url, data, config)
  }
}

export default http
