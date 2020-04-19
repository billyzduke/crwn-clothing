// <ShopPage />
import React from 'react'

import SHOP_DATA from './data'

import CollectionPreview from 'components/collection-preview'

class ShopPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div
        className="shop-page"
      >
        {
          collections.map(({ id, ...etcProps }) => (
            <CollectionPreview
              key={ id }
              { ...etcProps }
            />
          ))
        }
      </div>
    )
  }
}

export default ShopPage
