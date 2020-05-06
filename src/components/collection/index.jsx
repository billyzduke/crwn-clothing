// <Collection />
import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import ShopItem from 'components/shop-item'
import { selectProductTypeFromName, selectProductsOfType } from 'stores/catalog/selectors'

const Collection = ({ collection }) => (
  <div
    className="collection"
  >
    <h2
      className="collection-title"
    >
      { collection.product_type ? collection.product_type.name : `` }
    </h2>
    <div
      className="collection-items"
    >
      {
        collection.products ?
          Object.entries(collection.products).map(([product_id, product]) => (
            <ShopItem
              key={ product_id }
              pid={ product_id }
              item={ product }
            />
          ))
          : ''
      }
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  collection: selectProductsOfType(selectProductTypeFromName(ownProps.match.params.pt_name)(state))(state)
})

export default connect(mapStateToProps)(Collection)
