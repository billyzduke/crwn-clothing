import { takeLatest, put, all, call } from 'redux-saga/effects'

import UserActionTypes from 'stores/user/types'
import {
  auth,
  googleProvider,
  createUserProfileDoc,
  getCurrentUser
} from 'firebase-utils'
import {
  signInFail,
  signInSucceed,
  signOutFail,
  signOutSucceed,
  signUpFail,
  signUpSucceed
} from 'stores/user/actions'

export function* getUserSnapshotFromAuth(userAuth, etcData) {
  try {
    const userRef = yield call(
      createUserProfileDoc,
      userAuth,
      etcData
    )
    const userSnapshot = yield userRef.get()
    yield put(signInSucceed({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch(error) {
    yield put(signInFail(error))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getUserSnapshotFromAuth(user)
  } catch(error) {
    yield put(signInFail(error))
  }
}

export function* onSignInEmailStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_EMAIL_START, signInWithEmail)
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getUserSnapshotFromAuth(user)
  } catch(error) {
    yield put(signInFail(error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getUserSnapshotFromAuth(userAuth)
  } catch(error) {
    yield put(signInFail(error))
  }
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSucceed())
  } catch(error) {
    yield put(signOutFail(error))
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(
      email,
      password
    )
    yield put(signUpSucceed({ user, etcData: { displayName } }))
  } catch(error) {
    yield put(signUpFail(error))
  }
}

export function* signInAfterSignUp({ payload: { user, etcData } }) {
  yield getUserSnapshotFromAuth(user, etcData)
}

export function* onSignInGoogleStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_GOOGLE_START, signInWithGoogle)
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCEED, signInAfterSignUp)
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignInEmailStart),
    call(onSignInGoogleStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ])
}
