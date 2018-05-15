import * as NotificationAction from '../../../Actions/NotificationAction'

const initialState = {
  messages: [],
  dismiss: 0
}

const add = (state, message, dismiss) => {
  let newState = {...state, dismiss: dismiss}
  newState.messages = [...state.messages, message]
  return newState
}

const NotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NotificationAction.NOTIFICATION_RESET:
      return {
        ...initialState
      }
    case NotificationAction.NOTIFICATION_ADD_MESSAGE:
      return add(state, action.payload.message, action.payload.dismiss)
    default:
      return state
  }
}

export default NotificationReducer
