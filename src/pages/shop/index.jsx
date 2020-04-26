// <ShopPage />
import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from 'components/collections-overview'
import Collection from 'components/collection'

const ShopPage = ({ match }) => (
  <div
    className="shop-page"
  >
    <Route
      exact
      path={ `${match.path}` }
      component={ CollectionsOverview }
    />
    <Route
      path={ `${match.path}/:ckey` }
      component={ Collection }
    />
  </div>
)

export default ShopPage
