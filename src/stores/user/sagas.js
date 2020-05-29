import { takeLatest, put, all, call } from 'redux-saga/effects'

import { auth, googleProvider, createUserProfileDoc, getCurrentUser } from 'firebase-utils'
import UserActionTypes from 'stores/user/types'
import { loginFail, loginSucceed, signOutFail, signOutSucceed } from 'stores/user/actions'

export function* getUserSnapshotFromAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDoc, userAuth)
    const userSnapshot = yield userRef.get()
    yield put(loginSucceed({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch(error) {
    yield put(loginFail(error))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getUserSnapshotFromAuth(user)
  } catch(error) {
    yield put(loginFail(error))
  }
}

export function* onLoginEmailStart() {
  yield takeLatest(UserActionTypes.LOGIN_EMAIL_START, signInWithEmail)
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getUserSnapshotFromAuth(user)
  } catch(error) {
    yield put(loginFail(error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getUserSnapshotFromAuth(userAuth)
  } catch(error) {
    yield put(loginFail(error))
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

export function* onLoginGoogleStart() {
  yield takeLatest(UserActionTypes.LOGIN_GOOGLE_START, signInWithGoogle)
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onLoginEmailStart),
    call(onLoginGoogleStart),
    call(onSignOutStart)
  ])
}
