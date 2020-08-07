import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import 'App.scss'

import CatalogOverviewContainer from 'components/catalog-overview/container'
import { selectCurrentUser } from 'stores/user/selectors'
import { checkUserSession } from 'stores/user/actions'
import { fetchCatalogStart } from 'stores/catalog/actions'

const App = ({ checkUserSession, fetchCatalogStart, selectCurrentUser }) => {
  useEffect(() => {
    checkUserSession()
    fetchCatalogStart()
  }, [checkUserSession, fetchCatalogStart])

  return (
    <CatalogOverviewContainer
      checkUserSession
      selectCurrentUser
    />
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCatalogStart: () => dispatch(fetchCatalogStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
