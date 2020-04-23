// <CartDropdown />
import React from 'react'

import './index.scss'

import FormButton from 'components/form-button'

const CartDropdown = () => (
  <div
    className="cart-dropdown"
  >
    <div
      className="cart-items"
    >
      <FormButton>Go to Checkout</FormButton>
    </div>
  </div>
)

export default CartDropdown
