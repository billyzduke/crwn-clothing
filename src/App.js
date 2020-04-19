import React from 'react'
import { Switch, Route } from 'react-router-dom'

import 'App.scss'

import Header from 'components/header'
import HomePage from 'pages/home'
import ShopPage from 'pages/shop'
import AuthPage from 'pages/auth'
import { auth } from 'firebase-utils'

const AcctPage = null

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header
          currentUser={ this.state.currentUser }
        />
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
            component={ this.state.currentUser ? AcctPage : AuthPage }
          />
        </Switch>
      </div>
    )
  }
}

export default App
