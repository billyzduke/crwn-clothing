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
