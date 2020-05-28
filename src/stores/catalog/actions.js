import { CatalogActionTypes } from 'stores/catalog/types'

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
