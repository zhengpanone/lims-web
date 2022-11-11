export interface IResponseData<T> {
  code: number
  msg: string
  data: T
}

export interface ILoginInfo {
  slide: string[]
  logoSquare: string
  logoRectangle: string
  loginLogo: string
}
