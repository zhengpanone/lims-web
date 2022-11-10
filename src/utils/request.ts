import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:8081',
})
// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 统一设置用户身份 token
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 统一处理接口响应错误,如token过期、服务端异常
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request
