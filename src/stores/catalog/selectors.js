import { createSelector } from 'reselect'

const selectCatalog = state => state.catalog

export const selectCatalogCollections = createSelector(
  [selectCatalog],
  // ({ collections }) => Object.entries(collections).map(([collection, details]) => ({ [collection]: details }))
  // SEEMS LIKE THERE SHOULD BE SOME WAY TO DO IT IN ONE LINE, BUT IT'S PISSING ME OFF, SO FOR NOW, THE below...

  ({ collections }) => {

    let collectionDetails = {}
    for (const collection in collections) {
      if (collections.hasOwnProperty(collection)) {
        for (const cprop in collections[collection]) {
          if (!collectionDetails[collection]) collectionDetails[collection] = {
            heroImgUrl: null,
            heroSize: null
          }
          if (collectionDetails[collection].hasOwnProperty(cprop) && collections[collection].hasOwnProperty(cprop)) {
            collectionDetails[collection][cprop] = collections[collection][cprop]
          }
        }
      }
    }
    // console.log('collectionDetails', collectionDetails)
    return collectionDetails
  }
)

export const selectAllProductsByCollection = createSelector(
  [selectCatalog],
  catalog => catalog.collections
)

export const selectCollectionPreviews = createSelector(
  [selectAllProductsByCollection],
  collections => Object.entries(collections)
    .map(([ckey, { products }]) => ({
      ckey,
      products: Object.entries(products)
        .filter((product, idx) => idx < 4)
        .map(([pid, productPreview]) => ([
          pid,
          productPreview
        ]))
    }))
)

export const selectOnlyProductsInCollection = ckeyUrlParam => createSelector(
  [selectCatalog],
  catalog => ({
    ckey: ckeyUrlParam,
    products: catalog.collections[ckeyUrlParam].products
  })
)
