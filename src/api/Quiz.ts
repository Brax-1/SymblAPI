import HttpLocal from './index'

export default class QuizApi {
  static tableData() {
    const quizDataPromise = new HttpLocal().httpGet('/data', {})
    return quizDataPromise
  }
}
