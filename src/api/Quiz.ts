import Http, { BASE_URL } from './index'
import { BookDemoPayload } from 'src/components/interfaces/dashboardinterface'
interface filterBox {
  search: string
  sort: string
}
export default class QuizApi {
  static tableData(url: string, params: filterBox) {
    const quizDataPromise = new Http(BASE_URL.API_URL)
      .setAuthToken()
      .httpGet(url, params, {})
    return quizDataPromise
  }
  static BookDemo(url: string, payload: BookDemoPayload) {
    const BookDemoPromise = new Http(BASE_URL.API_URL)
      .setAuthToken()
      .httpPost(url, {}, payload, {})
    return BookDemoPromise
  }
}
