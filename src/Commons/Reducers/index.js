import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import AuthReducer from './AuthReducer'
import NotificationReducer from './NotificationReducer'

// combine reducers
export default combineReducers({
  form: formReducer,
  auth: AuthReducer,
  notification: NotificationReducer
})
