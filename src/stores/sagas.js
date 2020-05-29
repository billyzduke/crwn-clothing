import { all, call } from 'redux-saga/effects'

import { catalogSagas } from 'stores/catalog/sagas'
import { userSagas } from 'stores/user/sagas'

export default function* rootSaga() {
  yield all([
    call(catalogSagas),
    call(userSagas)
  ])
}
