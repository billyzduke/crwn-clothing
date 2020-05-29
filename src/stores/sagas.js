import { all, call } from 'redux-saga/effects'

import { fetchCatalogStart } from 'stores/catalogs/sagas'

export default function* rootSaga() {
  yield all([
    call(fetchCatalogStart)
  ])
}
