import * as AuthAction from '../../../Actions/AuthAction'

const initialState = {
  token: undefined,
  user: undefined,
  error: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AuthAction.AUTH_SIGN_IN:
      return {
        ...state,
        token: action.payload
      }
    case AuthAction.AUTH_SIGN_OUT:
      return initialState
    case AuthAction.AUTH_SIGN_IN_ERROR:
      return {
        ...state,
        token: undefined,
        user: undefined,
        error: action.payload
      }
    case AuthAction.AUTH_GET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
