import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import 'App.scss'

import Header from 'components/header'
import WithSpinner from 'components/with-spinner'
import HomePage from 'pages/home'
import ShopPage from 'pages/shop'
import AuthPage from 'pages/auth'
import CheckoutPage from 'pages/checkout'
import { auth, createUserProfileDoc } from 'firebase-utils'
import { setCurrentUser } from 'stores/user/actions'
import { selectCurrentUser } from 'stores/user/selectors'
import { fetchCatalogStartAsync } from 'stores/catalog/actions'
import { selectCatalogHasData } from 'stores/catalog/selectors'

const FragmentWithSpinner = WithSpinner(React.Fragment)

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser, fetchCatalogStartAsync } = this.props
    fetchCatalogStartAsync()

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
    const { catalogHasData } = this.props
    console.log('app.render', this.props)
    return (
      <div>
        <Header />
        <FragmentWithSpinner
          isLoading={ !catalogHasData }
        >
          <Switch>
            <Route
              path="/"
              component={ HomePage }
              exact
            />
            <Route
              path="/shop"
              render={ props => <ShopPage
                isLoading={ !catalogHasData }
                { ...props }
              /> }
            />
            <Route
              path="/checkout"
              component={ CheckoutPage }
              exact
            />
            <Route
              exact
              path="/auth"
              render={ () =>
                this.props.currentUser ? (
                  <Redirect
                    to='/'
                  />
                ) : (
                  <AuthPage />
                )
              }
            />
          </Switch>
        </FragmentWithSpinner>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  catalogHasData: selectCatalogHasData
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  fetchCatalogStartAsync: () => dispatch(fetchCatalogStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
