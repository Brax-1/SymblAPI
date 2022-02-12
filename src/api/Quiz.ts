import Http, { BASE_URL } from './index'
import { BookDemoPayload } from 'src/components/interfaces/dashboardinterface'
interface UserLoginParams {
  username: string
  password: string
}
interface filterBox {
  search: string
  order: string
  offset: number
  limit: number
  orderColumn: string
}
export default class QuizApi {
  static tableData(url: string, params: filterBox) {
    const token = localStorage.getItem('token')
    const quizDataPromise = new Http(BASE_URL.API_URL).httpGet(url, params, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    return quizDataPromise
  }
  static loginAuth(url: string, params: UserLoginParams) {
    const loginAuthPromise = new Http(BASE_URL.API_URL).httpPost(
      url,
      {},
      params,
      {}
    )
    return loginAuthPromise
  }
  static BookDemo(url: string, payload: BookDemoPayload) {
    const token = localStorage.getItem('token')
    const BookDemoPromise = new Http(BASE_URL.API_URL).httpPost(
      url,
      {},
      payload,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    return BookDemoPromise
  }
}
