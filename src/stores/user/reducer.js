import UserActionTypes from 'stores/user/types'

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.LOGIN_FAIL:
    case UserActionTypes.SIGN_OUT_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case UserActionTypes.LOGIN_SUCCEED:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserActionTypes.SIGN_OUT_SUCCEED:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    default:
      return state
  }
}

export default userReducer
