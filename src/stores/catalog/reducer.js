import { CatalogActionTypes } from 'stores/catalog/types'
import { clearCatalogData } from 'stores/catalog/utils'

const INITIAL_STATE = {
  data: {
    product_types: null,
    products: null
  },
  fetchError: undefined
}

const catalogReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case CatalogActionTypes.FETCH_CATALOG_START:
    return {
      ...state,
      data: clearCatalogData(state.data)
    }
  case CatalogActionTypes.FETCH_CATALOG_FAILURE:
    return {
      ...state,
      fetchError: action.payload
    }
  case CatalogActionTypes.FETCH_COLLECTION_SUCCESS:
    // console.log('FETCH_COLLECTION_SUCCESS', action.payload)
    return {
      ...state,
      data: {
        ...state.data,
        [action.payload.collectionName]: action.payload.collectionObj
      }
    }
  default:
    return state
  }
}

export default catalogReducer
