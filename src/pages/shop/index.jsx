// <ShopPage />
import React from 'react'
import { Route } from 'react-router-dom'

import WithSpinner from 'components/with-spinner'
import CollectionsOverview from 'components/collections-overview'
import Collection from 'components/collection'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionWithSpinner = WithSpinner(Collection)

class ShopPage extends React.Component {
  render() {
    const { match, isLoading } = this.props
    return (
      <div
        className="shop-page"
      >
        <Route
          exact
          path={ `${match.path}` }
          render={ props => <CollectionsOverviewWithSpinner
            isLoading={ isLoading }
            { ...props }
          /> }
        />
        <Route
          path={ `${match.path}/:pt_name` }
          render={ props => <CollectionWithSpinner
            isLoading={ isLoading }
            { ...props }
          /> }
        />
      </div>
    )
  }
}

export default ShopPage
