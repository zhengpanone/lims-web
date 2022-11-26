import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import { indexStore } from '@/store/index'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASEURL,
})
// 请求拦截器
request.interceptors.request.use(
  function (config) {
    // 统一设置用户身份 token
    const user = indexStore().user
    if (user && user.token && config.headers) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
// 响应拦截器
request.interceptors.response.use(
  function (response) {
    // 统一处理接口响应错误,如token过期、服务端异常

    if (response.data.code && response.data.code != 200) {
      ElMessage.error(response.data.msg || '请求失败,请联系管理员')
      // 手动返回promise异常
      return Promise.reject(response.data)
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then((res) => {
    return res.data as T
  })
}
