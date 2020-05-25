import { CatalogActionTypes } from 'stores/catalog/types'

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
      data: Object.keys(state.data).reduce((accumulator, collectionName) => {
        accumulator[collectionName] = null
        return accumulator
      }, {})
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
