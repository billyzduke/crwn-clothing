import { createSelector } from 'reselect'

const selectCatalog = state => state.catalog

export const selectCatalogCollections = createSelector(
  [selectCatalog],
  // ({ collections }) => Object.entries(collections).map(([collection, details]) => ({ [collection]: details }))
  // SEEMS LIKE THERE SHOULD BE SOME WAY TO DO IT IN ONE LINE, BUT IT'S PISSING ME OFF, SO FOR NOW, THE below...

  ({ collections }) => {

    let collectionDetails = {}
    for (const ckey in collections) {
      if (collections.hasOwnProperty(ckey)) {
        for (const cprop in collections[ckey]) {
          if (!collectionDetails[ckey]) collectionDetails[ckey] = {
            heroImgUrl: null,
            heroSize: null
          }
          if (collectionDetails[ckey].hasOwnProperty(cprop) && collections[ckey].hasOwnProperty(cprop)) {
            collectionDetails[ckey][cprop] = collections[ckey][cprop]
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

export const selectCollectionPreviews = numThumbs => createSelector(
  [selectAllProductsByCollection],
  collections => Object.entries(collections)
    .map(([ckey, { products }]) => ({
      ckey,
      products: Object.entries(products)
        .filter((product, idx) => idx < numThumbs)
        .map(([pid, productPreview]) => ([
          pid,
          productPreview
        ]))
    }))
)

export const selectProducts = pids => createSelector(
  [selectAllProductsByCollection],
  collections => {
    let selectedProducts = {}
    for (const ckey in collections) {
      if (collections.hasOwnProperty(ckey)) {
        let { products } = collections[ckey]
        if (products) {
          for (const pid in products) {
            if (!pids || pids.includes(pid)) {
              selectedProducts[pid] = products[pid]
            }
          }
        }
      }
    }
    console.log('selectedProducts', selectedProducts)
    return selectedProducts
  }
)

export const selectOnlyProductsInCollection = ckeyUrlParam => createSelector(
  [selectCatalog],
  catalog => ({
    ckey: ckeyUrlParam,
    products: catalog.collections[ckeyUrlParam].products
  })
)
