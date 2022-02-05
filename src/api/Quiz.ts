import Http, { BASE_URL } from './index'
export default class QuizApi {
  static tableData() {
    const quizDataPromise = new Http(BASE_URL.API_URL).httpGet('/data', {})
    return quizDataPromise
  }
  static loginAuth(url: string) {
    const loginAuthPromise = new Http(BASE_URL.PROFVED_URL).httpGet(url, {})
    return loginAuthPromise
  }
}
