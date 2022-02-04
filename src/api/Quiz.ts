import Http from './index'

export default class QuizApi {
  static tableData() {
    const loginPromise = new Http().httpGet('/data', {})
    return loginPromise
  }
}
