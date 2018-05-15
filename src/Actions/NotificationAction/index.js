import axios from '../../Commons/Axios'
import Store from '../../Commons/Store'

const NOTIFICATION_ADD_MESSAGE = 'NOTIFICATION_ADD_MESSAGE'
const NOTIFICATION_RESET = 'NOTIFICATION_RESET'

export {NOTIFICATION_ADD_MESSAGE, NOTIFICATION_RESET}

export default class NotificationAction {

  constructor() {
    this.axios = axios
    this.dispatch = Store.dispatch
  }

  add(message, dismiss = 0) {
    this.dispatch({
      type: NOTIFICATION_ADD_MESSAGE,
      payload: { message: message, dismiss: dismiss }
    })
  }

  reset() {
    this.dispatch({
      type: NOTIFICATION_RESET
    })
  }
}
