import { createSelector } from 'reselect'

const selectCatalog = state => state.catalog

export const selectAllCollections = createSelector(
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

export const selectAllProducts = createSelector(
  [selectCatalog],
  catalog => catalog.products
)

export const previewProductsByCollection = howMany => createSelector(
  [
    selectAllCollections,
    selectAllProducts
  ],
  (collections, products) => Object.entries(collections)
    .map(([ckey, cdeets]) => ({
      ckey,
      products: Object.entries(products)
        .filter(function([pid, product]) {
          if (product.ckeys.includes(ckey) && (!howMany || this.rayLen < howMany)) {
            this.rayLen++
            return true
          }
          return false
        }, { rayLen: 0 })
        .map(([pid, productPreview]) => ([
          pid,
          productPreview
        ]))
    }))
)

export const selectProducts = pids => createSelector(
  [selectAllProducts],
  products => {
    let selectedProducts = {}
    for (const pid in products) {
      if (!pids || pids.includes(pid)) {
        selectedProducts[pid] = products[pid]
      }
    }
    // console.log('selectedProducts', selectedProducts)
    return selectedProducts
  }
)

export const selectProductsInCollection = ckeyUrlParam => createSelector(
  [selectAllProducts],
  products => {
    let collectedProducts = {
      ckey: ckeyUrlParam,
      products: {}
    }
    for (const pid in products) {
      if (products[pid].ckeys.includes(collectedProducts.ckey)) {
        collectedProducts.products[pid] = products[pid]
      }
    }
    // console.log('collectedProducts', collectedProducts)
    return collectedProducts
  }
)
