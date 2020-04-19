import React from 'react'
import { Switch, Route } from 'react-router-dom'

import 'App.scss'

import Header from 'components/header'
import HomePage from 'pages/home'
import ShopPage from 'pages/shop'
import AuthPage from 'pages/auth'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ HomePage } exact />
        <Route path="/shop" component={ ShopPage } />
        <Route path="/auth" component={ AuthPage } />
      </Switch>
    </div>
  )
}

export default App
