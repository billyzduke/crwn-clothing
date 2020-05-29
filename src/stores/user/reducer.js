import UserActionTypes from 'stores/user/types'

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.LOGIN_EMAIL_FAIL:
    case UserActionTypes.LOGIN_GOOGLE_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case UserActionTypes.LOGIN_EMAIL_SUCCEED:
    case UserActionTypes.LOGIN_GOOGLE_SUCCEED:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    default:
      return state
  }
}

export default userReducer
