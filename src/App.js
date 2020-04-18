import React from 'react'
import { Switch, Route } from 'react-router-dom'

import 'App.scss'

import Header from 'components/header'
import HomePage from 'pages/home'
import ShopPage from 'pages/shop'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ HomePage } exact />
        <Route path="/shop" component={ ShopPage } />
      </Switch>
    </div>
  )
}

export default App
