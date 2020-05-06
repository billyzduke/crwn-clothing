import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import 'App.scss'

import Header from 'components/header'
import HomePage from 'pages/home'
import ShopPage from 'pages/shop'
import AuthPage from 'pages/auth'
import CheckoutPage from 'pages/checkout'
import { auth, createUserProfileDoc, firestore, mapSnapshot } from 'firebase-utils'
import { setCurrentUser } from 'stores/user/actions'
import { selectCurrentUser } from 'stores/user/selectors'
import { updateProductTypes, updateProducts } from 'stores/catalog/actions'

class App extends React.Component {
  unsubscribeFromAuth = null
  unsubscribeFromCatalog = null
  unsubscribeFromProducts = null

  componentDidMount() {
    const { setCurrentUser, updateProductTypes, updateProducts } = this.props
    const productTypesRef = firestore.collection('product_types').orderBy('heroSize').orderBy('name')
    this.unsubscribeFromProductTypes = productTypesRef.onSnapshot(async snapShot => {
      const productTypesObj = mapSnapshot(snapShot)
      updateProductTypes(productTypesObj)
    })
    const productsRef = firestore.collection('products')
    this.unsubscribeFromProducts = productsRef.onSnapshot(async snapShot => {
      const productsObj = mapSnapshot(snapShot)
      updateProducts(productsObj)
    })

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
    this.unsubscribeFromProducts()
    this.unsubscribeFromProductTypes()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/"
            component={ HomePage }
            exact
          />
          <Route
            path="/shop"
            component={ ShopPage }
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
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  updateProductTypes: productTypesObj => dispatch(updateProductTypes(productTypesObj)),
  updateProducts: productsObj => dispatch(updateProducts(productsObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
