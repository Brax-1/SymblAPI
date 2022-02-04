import Http from './index'

export default class QuizApi {
  static tableData(payload = {}) {
    const loginPromise = new Http().httpGet('/data', {})
    return loginPromise
  }
}
