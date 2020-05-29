import { takeLatest, put, all, call } from 'redux-saga/effects'

import { auth, googleProvider, createUserProfileDoc } from 'firebase-utils'
import UserActionTypes from 'stores/user/types'
import { loginFail, loginSucceed } from 'stores/user/actions'

export function* getUserSnapshotFromAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDoc, userAuth)
    const userSnapshot = yield userRef.get()
    yield put(loginSucceed({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch(error) {
    yield put(loginFail(error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getUserSnapshotFromAuth(user)
  } catch(error) {
    yield put(loginFail(error))
  }
}

export function* onLoginGoogleStart() {
  yield takeLatest(UserActionTypes.LOGIN_GOOGLE_START, signInWithGoogle)
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

export function* userSagas() {
  yield all([
    call(onLoginEmailStart),
    call(onLoginGoogleStart)
  ])
}
