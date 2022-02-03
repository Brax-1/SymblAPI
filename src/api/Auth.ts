import Http from './index'

export default class AuthApi {
  login(payload = {}) {
    const loginPromise = new Http().httpPost('/login', {}, payload)
    return loginPromise
  }
}
