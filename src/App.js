import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import 'App.scss'

import CatalogOverviewContainer from 'components/catalog-overview/container'
import { selectCurrentUser } from 'stores/user/selectors'
import { checkUserSession } from 'stores/user/actions'
import { fetchCatalogStart } from 'stores/catalog/actions'

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession, fetchCatalogStart } = this.props
    checkUserSession()
    fetchCatalogStart()
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
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCatalogStart: () => dispatch(fetchCatalogStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
