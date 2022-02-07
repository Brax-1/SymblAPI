import Http, { BASE_URL } from './index'
interface UserLoginParams {
  username: string
  password: string
}
interface filterBox {
  search: string
  sort: string
}
export default class QuizApi {
  static tableData(params: filterBox) {
    const quizDataPromise = new Http(BASE_URL.API_URL).httpGet('/data', params)
    return quizDataPromise
  }
  static loginAuth(url: string, params: UserLoginParams) {
    const loginAuthPromise = new Http(BASE_URL.PROFVED_URL).httpGet(url, params)
    return loginAuthPromise
  }
}
