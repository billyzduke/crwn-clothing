// <CheckoutPage />
import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import CheckoutHeader from 'components/checkout-header'
import CheckoutItem from 'components/checkout-item'
import StripeCheckoutButton from 'components/stripe-button'
import { selectCartItems, selectCartPriceTotal } from 'stores/cart/selectors'
import { selectProductsFromIds } from 'stores/catalog/selectors'

const CheckoutPage = ({ cartItems, cartProducts, cartPriceTotal }) => (
  <div
    className="checkout-page"
  >
    <CheckoutHeader />
    {
      cartProducts ? Object.entries(cartProducts).map(([pid, product]) => (
        <CheckoutItem
          key={ pid }
          pid={ pid }
          quantity={ cartItems[pid] }
          item={ product }
        />
      )) : ''
    }
    <div
      className="cart-total"
    >
      <span>TOTAL:</span>
      <span>${ cartPriceTotal.toFixed(2) }</span>
      <span>
        { cartPriceTotal ?
          <StripeCheckoutButton
            price={ cartPriceTotal }
          />
          : ''
        }
      </span>
    </div>
    <div
      className='test-warning'
    >
  *Please use the following test credit card for payments*
      <br />
  4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  cartPriceTotal: selectCartPriceTotal(selectProductsFromIds(Object.keys(state.cart.cartItems))(state))(state),
  cartProducts: selectProductsFromIds(Object.keys(state.cart.cartItems))(state)
})

export default connect(mapStateToProps)(CheckoutPage)
