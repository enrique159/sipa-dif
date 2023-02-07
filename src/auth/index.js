import decode from 'jwt-decode'
import axios from 'axios'
import store from '@/store/index'

export function logoutUser() {
  axios.defaults.headers.common['Authorization'] = ''
  store.dispatch("setToken", "")
  store.dispatch("setUser", { user: { } })
}

export function setUser(user) {
  store.dispatch("setUser", { user })
}

export function setAuthToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  store.dispatch("setToken", { token })
}

export function setRememberSesion(rememberSesion) {
  store.dispatch("setRememberSesion", { rememberSesion })
}

export function isLoggedIn() {
  let authToken = getAuthToken()
  return !emptyString(authToken)  && isTokenExpired(authToken)
}

export function emptyString(value) {
  return value === null || value === undefined || value === ''
}

export function getAuthToken() {
  return store.getters.getToken
}

function isTokenExpired(token) {
  let expirationDate = getTokenExpirationDate(token)
  return expirationDate < new Date()
}

function getTokenExpirationDate(encodedToken) {
  let token = decode(encodedToken)
  if (!token.exp) {
    return null
  }

  let date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}




