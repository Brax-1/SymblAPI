import Http, { BASE_URL } from './index'

export default class AuthApi {
  static loginAuth(url: string, params: UserLoginParams) {
    const loginAuthPromise = new Http(BASE_URL.API_URL).httpPost(
      url,
      {},
      params,
      {}
    )
    return loginAuthPromise
  }
}

interface UserLoginParams {
  username: string
  password: string
}
