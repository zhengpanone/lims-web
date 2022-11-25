/**
 * 公共基础接口封装
 */
import request from '@/utils/request'
import { IResponseData, ILoginInfo, ILoginRresponse } from './types/common'

export const getLoginInfo = () => {
  return request<IResponseData<ILoginInfo>>({
    method: 'GET',
    url: '/api/user/login/info',
  })
}
/**
 * 获取图片验证码
 * @returns 返回图片验证码
 */
export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/api/verify/getCode',
    params: { stamp: Date.now() },
    responseType: 'blob',
  })
}

export const login = (data: {
  account: string
  pwd: string
  imgCode: string
}) => {
  return request<ILoginRresponse>({
    method: 'POST',
    url: '/api/user/login',
    data,
  })
}
