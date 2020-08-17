import { memoize, memoizeAs } from 'reselectie'

const selectCatalog = state => state.catalog

export const selectCatalogHasData = memoize(
  selectCatalog,
  catalog => Object.entries(catalog.data).reduce((accumulator, [collectionName, collectionData]) => {
    accumulator = Boolean(accumulator && collectionData)
    return accumulator
  }, true)
)

export const selectAllProducts = memoize(
  selectCatalog,
  catalog => catalog.data.products ? catalog.data.products : null
)

export const selectAllProductKeys = memoize(
  selectAllProducts,
  products => products ? Object.keys(products) : []
)

export const selectProductsFromIds = memoizeAs(
  (state, product_ids) => selectAllProducts(state),
  (products, product_ids) => products && product_ids ? product_ids.reduce((accumulator, product_id) => {
    accumulator[product_id] = products[product_id]
    return accumulator
  }, {}) : null
)

export const selectAllProductTypesByKey = memoize(
  selectCatalog,
  catalog => catalog.data.product_types ? catalog.data.product_types : {}
)

export const selectAllProductTypesByName = memoize(
  selectAllProductTypesByKey,
  product_types => product_types ? Object.entries(product_types).reduce((accumulator, [product_id, product_type]) => {
    accumulator[product_type.name] = product_type
    // delete accumulator[product_type.name].name
    return accumulator
  }, {}) : null
)

export const selectProductTypeFromOwnName = memoizeAs(
  (state, product_type_name) => selectAllProductTypesByName(state),
  (product_types, product_type_name) => product_types ? product_types[product_type_name] : null
)

export const selectProductsOfTypeFromTypeName = memoizeAs(
  (state, product_type_name) => selectProductTypeFromOwnName(product_type_name)(state),
  (state, product_type_name) => selectAllProducts(state),
  (product_type, products, product_type_name) => product_type && products ? {
    product_type: {
      name: product_type_name,
      ...product_type
    },
    products: product_type.products.reduce((accumulator, product_id) => {
      accumulator[product_id] = products[product_id]
      return accumulator
    }, {})
  } : null
)

export const previewAllProductsByType = memoizeAs(
  (state, how_many) => selectAllProductTypesByName(state),
  (state, how_many) => selectAllProducts(state),
  (product_types, all_products, how_many) => product_types && all_products ? Object.entries(product_types)
    .map(([product_type_name, product_type]) => ({
      title: product_type_name,
      products: product_type.products
        .slice(0, how_many)
        .reduce((accumulator, product_id) => {
          accumulator.push(
            {
              id: product_id,
              ...all_products[product_id]
            }
          )
          return accumulator
        }, [])
    }))
    : null
)


// .reduce((accumulator, data) => {
//   accumulator[data.id] = data
//   delete accumulator[data.id].id
//   return accumulator
// }, {})
