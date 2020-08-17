export const clearCatalogData = (catalogData) => {
  return Object.keys(catalogData).reduce((accumulator, collectionName) => {
    accumulator[collectionName] = null
    return accumulator
  }, {})
}
