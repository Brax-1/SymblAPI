import HttpLocal from './index'
import HttpGeneral from './genaralApi'

export default class AuthApi {
  login(payload = {}) {
    const loginPromise = new HttpLocal().httpPost('/login', {}, payload)
    return loginPromise
  }
  static loginAuthCheck(url: string) {
    console.log(url)
    const loginAuthPromise = new HttpGeneral().httpGet(url)
    return loginAuthPromise
  }
}
