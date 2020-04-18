import React from 'react'
import { Switch, Route } from 'react-router-dom'

import 'App.scss'

import HomePage from 'pages/home'
import ShopPage from 'pages/shop'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={ HomePage } exact />
        <Route path="/shop" component={ ShopPage } />
      </Switch>
    </div>
  )
}

export default App
