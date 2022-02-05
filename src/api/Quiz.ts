import Http, { BASE_URL } from './index'
interface UserLoginParams {
  username: string
  password: string
}
export default class QuizApi {
  static tableData() {
    const quizDataPromise = new Http(BASE_URL.API_URL).httpGet('/data', {})
    return quizDataPromise
  }
  static loginAuth(url: string, params: UserLoginParams) {
    console.log(url)
    const loginAuthPromise = new Http(BASE_URL.PROFVED_URL).httpGet(url, params)
    return loginAuthPromise
  }
}
