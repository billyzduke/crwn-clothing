import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import 'App.scss'

import CatalogOverviewContainer from 'components/catalog-overview/container'
import { auth, createUserProfileDoc } from 'firebase-utils'
import { setCurrentUser } from 'stores/user/actions'
import { selectCurrentUser } from 'stores/user/selectors'
import { fetchCatalogStart } from 'stores/catalog/actions'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser, fetchCatalogStart } = this.props
    fetchCatalogStart()

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
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
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  fetchCatalogStart: () => dispatch(fetchCatalogStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
