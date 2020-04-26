// <CollectionPreview />
import React from 'react'
import { withRouter } from 'react-router-dom'

import './index.scss'

import ShopItem from 'components/shop-item'

const CollectionPreview = ({ ckey, products, history, match }) => {
  console.log('products', products)
  return (
    <div
      className="collection-preview"
    >
      <h1
        className="title"
        onClick={ () => history.push(`${match.url}/${ckey}`) }
      >{ ckey }</h1>
      <div
        className="preview"
      >
        {
          products.map(([id, product]) => (
            <ShopItem
              key={ id }
              item={ product }
            />
          ))
        }
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview)
