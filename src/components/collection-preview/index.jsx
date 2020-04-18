// <CollectionPreview />
import React from 'react'

import './index.scss'

import CollectionItem from 'components/collection-item'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">Title</h1>
    <div className="preview">
      {
        items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={ id } { ...otherItemProps } />
          ))
      }
    </div>
  </div>
)

export default CollectionPreview
