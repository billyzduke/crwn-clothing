// <CheckoutHeader />
import React from 'react'

import './index.scss'

const CheckoutHeader = () => (
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
      <span>&#10005;</span>
    </div>
    <div
      className="header-block"
    >
      <span>Quantity</span>
    </div>
    <div
      className="header-block"
    >
      <span>=</span>
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
)

export default CheckoutHeader
