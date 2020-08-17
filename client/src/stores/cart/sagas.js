import { takeLatest, all, call, put } from 'redux-saga/effects'

import UserActionTypes from 'stores/user/types'
import { clearCart } from 'stores/cart/actions'

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCEED, clearCartOnSignOut)
}

export function* cartSagas() {
  yield(all([
    call(onSignOutSuccess)
  ]))
}
