import Http from './index'
export default class QuizApi {
  static tableData() {
    const quizDataPromise = new Http().httpGet('/data', {})
    return quizDataPromise
  }
  static loginAuth(url: string) {
    const loginAuthPromise = new Http().httpGet(url, {})
    return loginAuthPromise
  }
}
