// <CheckoutPage />
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './index.scss'

import CheckoutItem from 'components/checkout-item'
import { selectCartItems, selectCartTotal } from 'stores/cart/selectors'

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div
    className="checkout-page"
  >
    <div
      className="checkout-header"
    >
      <div
        className="header-block"
      >
        <span>Product</span>
      </div>
      <div
        className="header-block"
      >
        <span>Description</span>
      </div>
      <div
        className="header-block"
      >
        <span>Price</span>
      </div>
      <div
        className="header-block"
      >
        <span>Quantity</span>
      </div>
      <div
        className="header-block"
      >
        <span>Subtotal</span>
      </div>
      <div
        className="header-block"
      >
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem =>
        <CheckoutItem
          key={ cartItem.id }
          cartItem={ cartItem }
        />
      )
    }
    <div
      className="cart-total"
    >
      <span>TOTAL:</span>
      <span>${ cartTotal.toFixed(2) }</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
