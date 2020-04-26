// <CollectionsOverview />
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './index.scss'

import CollectionPreview from 'components/collection-preview'
import { selectCollectionPreviews } from 'stores/catalog/selectors'

const CollectionsOverview = ({ collectionPreviews }) => {
  console.log('collectionPreviews', collectionPreviews)
  return (
    <div
      className="collections-overview"
    >
      {
        collectionPreviews.map(({ ckey, products }) => (
          <CollectionPreview
            key={ ckey }
            ckey={ ckey }
            products={ products }
          />
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collectionPreviews: selectCollectionPreviews
})

export default connect(mapStateToProps)(CollectionsOverview)
