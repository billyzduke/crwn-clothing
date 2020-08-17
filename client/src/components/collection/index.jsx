// <Collection />
import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import ShopItem from 'components/shop-item'
import { selectProductsOfTypeFromTypeName } from 'stores/catalog/selectors'

const Collection = ({ collection }) => (
  <div
    className="collection"
  >
    <h2
      className="collection-title"
    >
      { collection ? collection.product_type.name : `` }
    </h2>
    <div
      className="collection-items"
    >
      {
        collection ?
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
  collection: selectProductsOfTypeFromTypeName(ownProps.match.params.pt_name)(state)
})

export default connect(mapStateToProps)(Collection)
