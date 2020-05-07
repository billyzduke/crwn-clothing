// <CollectionsOverview />
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './index.scss'

import CollectionPreview from 'components/collection-preview'
import { previewAllProductsByType } from 'stores/catalog/selectors'

const CollectionsOverview = ({ collectionPreviews }) => {
  // console.log('collectionPreviews', collectionPreviews)
  return (
    <div
      className="collections-overview"
    >
      { collectionPreviews ? collectionPreviews.map(({ title, products }) => (
        <CollectionPreview
          key={ title }
          title={ title }
          products={ products }
        />
      )) : ''
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collectionPreviews: previewAllProductsByType(4)
})

export default connect(mapStateToProps)(CollectionsOverview)
