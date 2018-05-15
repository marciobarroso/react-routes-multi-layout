import axios from '../../Commons/Axios'
import Store from '../../Commons/Store'

import NotificationAction from '../NotificationAction'

const AUTH_SIGN_IN = 'AUTH_SIGN_IN'
const AUTH_SIGN_OUT = 'AUTH_SIGN_OUT'
const AUTH_SIGN_IN_ERROR = 'AUTH_SIGN_IN_ERROR'
const AUTH_GET_USER = 'AUTH_GET_USER'

export {AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_SIGN_IN_ERROR, AUTH_GET_USER}

export default class AuthAction {

  constructor() {
    this.axios = axios
    this.dispatch = Store.dispatch
    this.notificationAction = new NotificationAction()
  }

  signIn(credentials) {
    this.axios.post('auth', credentials).then(response => {
      this.dispatch({
        type: AUTH_SIGN_IN,
        payload: response.data.token
      })
    }).catch(error => {
      this.notificationAction.add(error.data.message)
    })
  }

  signOut() {
    this.dispatch({
      type: AUTH_SIGN_OUT
    })
  }

  getUser() {
    this.axios.get('auth').then(response => {
      this.dispatch({
        type: AUTH_GET_USER,
        payload: response.data
      })
    }).catch(() => {
      this.dispatch({
        type: AUTH_SIGN_IN_ERROR
      })
    })
  }
}
