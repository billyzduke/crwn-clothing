// <CatalogPreview />
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './index.scss'

import CollectionHero from 'components/collection-hero'

import { selectCatalogCollections } from 'stores/catalog/selectors'

const CatalogPreview = ({ collections }) => (
  <div
    className='catalog-preview'
  > {
      Object.entries(collections).map(([ckey, { ...details }]) => (
        <CollectionHero
          key={ ckey }
          ckey={ ckey }
          { ...details }
        />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCatalogCollections
})

export default connect(mapStateToProps)(CatalogPreview)
