import { takeLatest, all, call, put } from 'redux-saga/effects'

import { firestore, mapSnapshot } from 'firebase-utils'
import CatalogActionTypes from 'stores/catalog/types'
import { fetchCatalogFail, fetchCollectionSucceed } from 'stores/catalog/actions'

export function* fetchCatalogAsync() {
  const catalogRefs = {
    product_types: firestore.collection('product_types').orderBy('heroSize').orderBy('name'),
    products: firestore.collection('products').orderBy('name')
  }
  for (const ref in catalogRefs) {
    try {
      catalogRefs[ref] = yield catalogRefs[ref].get()
      catalogRefs[ref] = yield call(mapSnapshot, catalogRefs[ref])
      yield put(fetchCollectionSucceed(ref, catalogRefs[ref]))
    } catch (fetchError) {
      yield put(fetchCatalogFail(fetchError))
    }
  }
}

export function* fetchCatalogStart() {
  yield takeLatest(
    CatalogActionTypes.FETCH_CATALOG_START,
    fetchCatalogAsync
  )
}

export function* catalogSagas() {
  yield all([
    call(fetchCatalogStart)
  ])
}
