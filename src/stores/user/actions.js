import UserActionTypes from 'stores/user/types'

export const loginEmailStart = emailAndPassword => ({
  type: UserActionTypes.LOGIN_EMAIL_START,
  payload: emailAndPassword
})

export const loginGoogleStart = () => ({
  type: UserActionTypes.LOGIN_GOOGLE_START
})

export const loginFail = error => ({
  type: UserActionTypes.LOGIN_FAIL,
  payload: error
})

export const loginSucceed = user => ({
  type: UserActionTypes.LOGIN_SUCCEED,
  payload: user
})

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
})

export const signOutFail = error => ({
  type: UserActionTypes.SIGN_OUT_FAIL,
  payload: error
})

export const signOutSucceed = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCEED
})
