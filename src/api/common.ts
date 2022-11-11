/**
 * 公共基础接口封装
 */
import request from '@/utils/request'
import { IResponseData, ILoginInfo } from './types/common'

export const getLoginInfo = () => {
  return request<IResponseData<ILoginInfo>>({
    method: 'GET',
    url: '/api/user/login/info',
  })
}
