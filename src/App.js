import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import 'App.scss'

import Header from 'components/header'
import HomePage from 'pages/home'
import ShopPage from 'pages/shop'
import AuthPage from 'pages/auth'
import { auth, createUserProfileDoc } from 'firebase-utils'
import { setCurrentUser } from 'reduxxx/user/actions'

const AcctPage = null

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
            path="/auth"
            component={ this.props.currentUser ? AcctPage : AuthPage }
          />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App)
