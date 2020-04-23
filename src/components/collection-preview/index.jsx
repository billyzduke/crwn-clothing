// <CollectionPreview />
import React from 'react'

import './index.scss'

import CollectionItem from 'components/collection-item'

const CollectionPreview = ({ title, items }) => (
  <div
    className="collection-preview"
  >
    <h1
      className="title"
    >{ title }</h1>
    <div
      className="preview"
    >
      {
        items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem
              key={ item.id }
              item={ item }
            />
          ))
      }
    </div>
  </div>
)

export default CollectionPreview
