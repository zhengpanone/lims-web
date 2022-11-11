/**
 * 公共基础接口封装
 */
import request from '@/utils/request'

interface ResponseData<T> {
  code: number
  msg: string
  data: T
}

export const getLoginInfo = () => {
  /* return request({
    method: 'GET',
    url: '/user/login/info',
  }) */
  return request.get<
    ResponseData<{
      slide: string[]
      logo_square: string
      logo_rectangle: string
      login_login: string
    }>
  >('/user/login/info')
}
