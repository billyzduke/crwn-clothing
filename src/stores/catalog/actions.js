import { CatalogActionTypes } from 'stores/catalog/types'

import { firestore, mapSnapshot } from 'firebase-utils'

export const fetchCatalogStart = () => ({
  type: CatalogActionTypes.FETCH_CATALOG_START
})

export const fetchCatalogFailure = fetchError => ({
  type: CatalogActionTypes.FETCH_CATALOG_FAILURE,
  payload: fetchError
})

export const fetchCollectionSuccess = (collectionName, collectionObj) => ({
  type: CatalogActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: {
    collectionName,
    collectionObj
  }
})

export const fetchCatalogStartAsync = () => {
  return dispatch => {
    const productTypesRef = firestore.collection('product_types').orderBy('heroSize').orderBy('name')
    const productsRef = firestore.collection('products').orderBy('name')

    dispatch(fetchCatalogStart())

    productTypesRef.get().then(snapShot => {
      const productTypesObj = mapSnapshot(snapShot)
      // console.log({ productTypesObj })
      dispatch(fetchCollectionSuccess('product_types', productTypesObj))
    }).catch(fetchError => dispatch(fetchCatalogFailure(fetchError)))

    productsRef.get().then(snapShot => {
      const productsObj = mapSnapshot(snapShot)
      // console.log({ productsObj })
      dispatch(fetchCollectionSuccess('products', productsObj))
    }).catch(fetchError => dispatch(fetchCatalogFailure(fetchError)))
  }
}
