export function setTokenInStorge(token: string) {
  localStorage.setItem('token', token)
}

export function getStoredToken() {
  return localStorage.getItem('token')
}
