import axios, { AxiosInstance } from 'axios'
import { getStoredToken } from 'src/utils/auth'
import Router from 'next/router'

export enum BASE_URL {
  API_URL = 'http://localhost:3001/api/v1/',
  JSON_URL = 'http://localhost:3006/',
}

export default class Http {
  private axiosRequest: AxiosInstance
  constructor(baseUrl: BASE_URL) {
    this.axiosRequest = axios.create({
      baseURL: baseUrl,
      timeout: 5000,
      responseType: 'json',
    })
    this.interceptors()
  }

  interceptors() {
    this.axiosRequest.interceptors.response.use(
      function (response) {
        return response
      },
      function (error) {
        const response = error.response
        if (response.status === 403 || response.status === 401) {
          Router.push('/admin')
        }
        return error
      }
    )
  }

  setAuthToken = () => {
    const token = getStoredToken() as string
    this.axiosRequest.defaults.headers.common[
      'authorization'
    ] = `Bearer ${token}`
    return this
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

  httpGet(url: string, params = {}, options = {}) {
    return new Promise((resolve, reject) => {
      const queryParams = this.makeQueryParams(params)
      this.axiosRequest
        .get(`${url}${queryParams}`, options)
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
