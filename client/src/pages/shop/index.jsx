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
          render={ props => <CollectionsOverview
            { ...props }
          /> }
        />
        <Route
          path={ `${match.path}/:pt_name` }
          render={ props => <Collection
            { ...props }
          /> }
        />
      </div>
    )
  }
}

export default ShopPage
