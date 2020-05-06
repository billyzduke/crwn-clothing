import { CatalogActionTypes } from 'stores/catalog/types'

const INITIAL_STATE = {
  product_types: null,
  products: null
}

const catalogReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case CatalogActionTypes.UPDATE_PRODUCT_TYPES:
    return {
      ...state,
      product_types: action.payload
    }
  case CatalogActionTypes.UPDATE_PRODUCTS:
    return {
      ...state,
      products: action.payload
    }
  default:
    return state
  }
}

export default catalogReducer
