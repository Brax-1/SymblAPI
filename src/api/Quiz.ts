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
    const loginAuthPromise = new Http(BASE_URL.API_URL).httpPost(
      url,
      {},
      params
    )
    return loginAuthPromise
  }
}
