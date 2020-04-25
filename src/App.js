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
import { auth, createUserProfileDoc } from 'firebase-utils'
import { setCurrentUser } from 'stores/user/actions'
import { selectCurrentUser } from 'stores/user/selectors'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } =  this.props
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
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
