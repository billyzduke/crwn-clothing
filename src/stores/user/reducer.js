import UserActionTypes from 'stores/user/types'

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.SIGN_IN_FAIL:
    case UserActionTypes.SIGN_OUT_FAIL:
    case UserActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case UserActionTypes.SIGN_IN_SUCCEED:
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
