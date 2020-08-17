import UserActionTypes from 'stores/user/types'

export const signInEmailStart = emailAndPassword => ({
  type: UserActionTypes.SIGN_IN_EMAIL_START,
  payload: emailAndPassword
})

export const signInGoogleStart = () => ({
  type: UserActionTypes.SIGN_IN_GOOGLE_START
})

export const signInFail = error => ({
  type: UserActionTypes.SIGN_IN_FAIL,
  payload: error
})

export const signInSucceed = user => ({
  type: UserActionTypes.SIGN_IN_SUCCEED,
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

export const signUpStart = newUser => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: newUser
})

export const signUpFail = error => ({
  type: UserActionTypes.SIGN_UP_FAIL,
  payload: error
})

export const signUpSucceed = ({ user, etcData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCEED,
  payload: { user, etcData }
})
