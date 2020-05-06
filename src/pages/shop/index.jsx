// <ShopPage />
import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from 'components/collections-overview'
import Collection from 'components/collection'

class ShopPage extends React.Component {
  render() {
    const { match } = this.props
    return (
      <div
        className="shop-page"
      >
        <Route
          exact
          path={ `${match.path}` }
          component={ CollectionsOverview }
        />
        <Route
          path={ `${match.path}/:pt_name` }
          component={ Collection }
        />
      </div>
    )
  }
}

export default ShopPage
