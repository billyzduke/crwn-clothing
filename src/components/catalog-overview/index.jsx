import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from 'components/header'
import HomePage from 'pages/home'
import ShopPage from 'pages/shop'
import AuthPage from 'pages/auth'
import CheckoutPage from 'pages/checkout'

const CatalogOverview = props => (
  <div
    className="catalog-overview"
  >
    <Header />
    <Switch>
      <Route
        path="/"
        component={ HomePage }
        exact
      />
      <Route
        path="/shop"
        render={ props => <ShopPage
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
          props.currentUser ? (
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

export default CatalogOverview
