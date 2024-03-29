// <CollectionPreview />
import React from 'react'
import { withRouter } from 'react-router-dom'

import './index.scss'

import ShopItem from 'components/shop-item'

const CollectionPreview = ({ title, products, history, match }) => {
  // console.log('products', products)
  return (
    <div
      className="collection-preview"
    >
      <h1
        className="title"
        onClick={ () => history.push(`${match.url}/${encodeURI(title)}`) }
      >{ title }</h1>
      <div
        className="preview"
      >
        { products ? products.map(product => (
          <ShopItem
            key={ product.id }
            pid={ product.id }
            item={ product }
          />
        )) : ''
        }
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview)
