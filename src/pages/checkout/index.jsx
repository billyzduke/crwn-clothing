// <CheckoutPage />
import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import CheckoutHeader from 'components/checkout-header'
import CheckoutItem from 'components/checkout-item'
import { selectCartItems, selectCartPriceTotal } from 'stores/cart/selectors'
import { selectProducts } from 'stores/catalog/selectors'

const CheckoutPage = ({ cartItems, cartProducts, cartPriceTotal }) => (
  <div
    className="checkout-page"
  >
    <CheckoutHeader />
    {
      Object.entries(cartProducts).map(([pid, product]) => (
        <CheckoutItem
          key={ pid }
          pid={ pid }
          quantity={ cartItems[pid] }
          item={ product }
        />
      ))
    }
    <div
      className="cart-total"
    >
      <span>TOTAL:</span>
      <span>${ cartPriceTotal.toFixed(2) }</span>
    </div>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  cartPriceTotal: selectCartPriceTotal(selectProducts(Object.keys(state.cart.cartItems))(state))(state),
  cartProducts: selectProducts(Object.keys(state.cart.cartItems))(state)
})

export default connect(mapStateToProps)(CheckoutPage)
