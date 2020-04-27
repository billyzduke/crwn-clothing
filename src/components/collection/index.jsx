// <Collection />
import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import ShopItem from 'components/shop-item'
import { selectOnlyProductsInCollection } from 'stores/catalog/selectors'

const Collection = ({ collection: { ckey, products } }) => (
  <div
    className="collection"
  >
    <h2
      className="collection-title"
    >
      { ckey }
    </h2>
    <div
      className="collection-items"
    >
      {
        Object.entries(products).map(([id, product]) => (
          <ShopItem
            key={ id }
            pid={ id }
            item={ product }
          />
        ))
      }
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  collection: selectOnlyProductsInCollection(ownProps.match.params.ckey)(state)
})

export default connect(mapStateToProps)(Collection)
