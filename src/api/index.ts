import axios, { AxiosInstance } from 'axios'

export enum BASE_URL {
  API_URL = 'http://localhost:3001/api/v1/',
  JSON_URL = 'http://localhost:3006/',
  PROFVED_URL = 'https://profved.com/wp-json/wp/v1',
}

export default class Http {
  private axiosRequest: AxiosInstance
  constructor(baseUrl: BASE_URL) {
    this.axiosRequest = axios.create({
      baseURL: baseUrl,
      timeout: 5000,
      responseType: 'json',
    })
  }

  makeQueryParams(params = {}) {
    let queryParams = ''
    if (Object.keys(params).length) {
      queryParams = '?'
      for (const key of Object.entries(params)) {
        queryParams += `${key[0]}=${key[1]}&`
      }
      queryParams = queryParams.slice(0, -1)
    }
    return queryParams
  }

  addTokenToHeader() {
    if (location.pathname !== '/') {
      const token = localStorage.getItem('token')
      this.axiosRequest.defaults.headers.common.Authorization = `Bearer ${token}`
    }
  }

  httpGet(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      const queryParams = this.makeQueryParams(params)
      this.axiosRequest
        .get(`${url}${queryParams}`)
        .then((response) => {
          if (response.status === 200)
            return resolve({ data: { ...response.data }, error: false })
          return reject({ ...response, error: true })
        })
        .catch((err) => {
          if (err.response) return reject({ ...err.response, error: true })
          return reject(err)
        })
    })
  }

  httpPost(url: string, params = {}, payload = {}, options = {}) {
    return new Promise((resolve, reject) => {
      const queryParams = this.makeQueryParams(params)
      this.axiosRequest
        .post(`${url}${queryParams}`, payload, options)
        .then((response) => {
          if (response.status === 200)
            return resolve({ data: { ...response.data }, error: false })
          return reject({ ...response, error: true })
        })
        .catch((err) => {
          if (err.response) return reject({ ...err.response, error: true })
          return reject(err)
        })
    })
  }
}
