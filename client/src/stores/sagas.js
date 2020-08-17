import { all, call } from 'redux-saga/effects'

import { catalogSagas } from 'stores/catalog/sagas'
import { userSagas } from 'stores/user/sagas'
import { cartSagas } from 'stores/cart/sagas'

export default function* rootSaga() {
  yield all([
    call(catalogSagas),
    call(userSagas),
    call(cartSagas)
  ])
}
