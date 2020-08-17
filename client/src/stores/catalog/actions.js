import CatalogActionTypes from 'stores/catalog/types'

export const fetchCatalogStart = () => ({
  type: CatalogActionTypes.FETCH_CATALOG_START
})

export const fetchCatalogFail = fetchError => ({
  type: CatalogActionTypes.FETCH_CATALOG_FAIL,
  payload: fetchError
})

export const fetchCollectionSucceed = (collectionName, collectionObj) => ({
  type: CatalogActionTypes.FETCH_COLLECTION_SUCCEED,
  payload: {
    collectionName,
    collectionObj
  }
})
