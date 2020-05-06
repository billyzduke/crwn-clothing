import { createSelector } from 'reselect'

const selectCatalog = state => state.catalog

export const selectAllProductTypes = createSelector(
  [selectCatalog],
  catalog => catalog.product_types ? catalog.product_types : {}
)

export const selectAllProducts = createSelector(
  [selectCatalog],
  catalog => catalog.products ? catalog.products : {}
)

export const selectProducts = product_ids => createSelector(
  [selectAllProducts],
  products => {
    let selectedProducts = {}
    for (const product_id in products) {
      if (products.hasOwnProperty(product_id) && (!product_ids || product_ids.includes(product_id))) {
        selectedProducts[product_id] = products[product_id]
      }
    }
    // console.log('selectedProducts', selectedProducts)
    return selectedProducts
  }
)

export const selectProductTypeFromName = product_type_name => createSelector(
  [selectAllProductTypes],
  product_types => {
    let product_type = {}
    // console.log('product_types', product_types)
    // console.log('product_type_name', product_type_name)
    for (const product_type_id in product_types) {
      // console.log(`product_types.hasOwnProperty('${product_type_id}')`, product_types.hasOwnProperty(product_type_id))
      // console.log(`product_types['${product_type_id}'].name === '${product_type_name}'`, product_types[product_type_id].name === product_type_name)
      if (product_types.hasOwnProperty(product_type_id) && product_types[product_type_id].name === product_type_name) {
        product_type = {
          id: product_type_id,
          ...product_types[product_type_id]
        }
      }
    }
    // console.log('product_type', product_type)
    return product_type
  }
)

export const selectProductsOfType = product_type => createSelector(
  [
    selectAllProducts
  ],
  (product_type, products) => {
    console.log('product_type', product_type)
    const productsOfType = product_type.products ? {
      product_type: product_type,
      products: product_type.products.reduce((accumulator, product_id) => {
        accumulator[product_id] = products[product_id]
        return accumulator
      }, {})
    } : {
      product_type: {},
      products: {}
    }
    console.log('productsOfType', productsOfType)
    return productsOfType
  }
)

export const previewProductsByType = howMany => createSelector(
  [
    selectAllProductTypes,
    selectAllProducts
  ],
  (product_types, products) => Object.entries(product_types)
    .map(([product_type_id, product_type]) => ({
      id: product_type_id,
      title: product_type.name,
      products: Object.entries(products)
        .filter(function([product_id, product]) {
          if (product_type.products.includes(product_id) && (!howMany || this.rayLen < howMany)) {
            this.rayLen++
            return true
          }
          return false
        }, { rayLen: 0 })
        .map(([product_id, product_view]) => ([
          product_id,
          product_view
        ]))
    }))
)


// .reduce((accumulator, data) => {
//   accumulator[data.id] = data
//   delete accumulator[data.id].id
//   return accumulator
// }, {})
