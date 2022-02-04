import Http from './index'

export default class AuthApi {
  static login(payload = {}) {
    const loginPromise = new Http().httpPost(
      '/dashboard/game-quiz',
      {},
      payload
    )
    return loginPromise
  }
}
