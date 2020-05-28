import { takeEvery, call, put } from 'redux-saga/effects'

import { firestore, mapSnapshot } from 'firebase-utils'
import { CatalogActionTypes } from 'stores/catalog/types'
import { fetchCatalogFailure, fetchCollectionSuccess } from 'stores/catalog/actions'

export function* fetchCatalogAsync() {
  const catalogRefs = {
    product_types: firestore.collection('product_types').orderBy('heroSize').orderBy('name'),
    products: firestore.collection('products').orderBy('name')
  }
  for (const ref in catalogRefs) {
    try {
      catalogRefs[ref] = yield catalogRefs[ref].get()
      catalogRefs[ref] = yield call(mapSnapshot, catalogRefs[ref])
      yield put(fetchCollectionSuccess(ref, catalogRefs[ref]))
    } catch (fetchError) {
      yield put(fetchCatalogFailure(fetchError))
    }
  }
}

export function* fetchCatalogStart() {
  yield takeEvery(
    CatalogActionTypes.FETCH_CATALOG_START,
    fetchCatalogAsync
  )
}
