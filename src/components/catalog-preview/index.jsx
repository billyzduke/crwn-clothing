// <CatalogPreview />
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './index.scss'

import CollectionHero from 'components/collection-hero'

import { selectAllProductTypes } from 'stores/catalog/selectors'

const CatalogPreview = ({ product_types }) => (
  <div
    className='catalog-preview'
  > {
      Object.entries(product_types).map(([pt_id, { ...details }]) => (
        <CollectionHero
          key={ pt_id }
          { ...details }
        />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  product_types: selectAllProductTypes
})

export default connect(mapStateToProps)(CatalogPreview)
