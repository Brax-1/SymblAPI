import axios, { AxiosInstance } from 'axios'

const API_URL = ''

export default class HttpGeneral {
  private axiosRequest: AxiosInstance
  constructor() {
    this.axiosRequest = axios.create({
      baseURL: API_URL,
      timeout: 5000,
      responseType: 'json',
    })
  }

  httpGet(url: string) {
    return new Promise((resolve, reject) => {
      this.axiosRequest
        .get(`${url}`)
        .then((response) => {
          if (response.status === 200)
            return resolve({ ...response.data, error: false })
          return reject({ ...response, error: true })
        })
        .catch((err) => {
          if (err.response) return reject({ ...err.response, error: true })
          return reject(err)
        })
    })
  }

  httpPost(url: string, params = {}, payload = {}) {
    return new Promise((resolve, reject) => {
      const queryParams = JSON.stringify({ ...params })
      this.axiosRequest
        .post(`${url}?${queryParams}`, payload)
        .then((response) => {
          if (response.status === 200)
            return resolve({ ...response.data, error: false })
          return reject({ ...response, error: true })
        })
        .catch((err) => {
          if (err.response) return reject({ ...err.response, error: true })
          return reject(err)
        })
    })
  }
}
