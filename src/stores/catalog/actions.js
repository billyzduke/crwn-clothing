import { CatalogActionTypes } from 'stores/catalog/types'

export const updateProductTypes = (productTypesObj) => ({
  type: CatalogActionTypes.UPDATE_PRODUCT_TYPES,
  payload: productTypesObj
})

export const updateProducts = (productsObj) => ({
  type: CatalogActionTypes.UPDATE_PRODUCTS,
  payload: productsObj
})
