import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import 'App.scss'

import CatalogOverviewContainer from 'components/catalog-overview/container'
import { selectCurrentUser } from 'stores/user/selectors'
import { fetchCatalogStart } from 'stores/catalog/actions'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { fetchCatalogStart } = this.props
    fetchCatalogStart()
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <CatalogOverviewContainer
        { ...this.props }
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  fetchCatalogStart: () => dispatch(fetchCatalogStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
