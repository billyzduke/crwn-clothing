// <CartDropdown />
import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import FormButton from 'components/form-button'
import CartItem from 'components/cart-item'
import { selectCartItems } from 'stores/cart/selectors'

const CartDropdown = ({ cartItems }) => (
  <div
    className="cart-dropdown"
  >
    <div
      className="cart-items"
    >
      {
        cartItems.map(cartItem => <CartItem
          key={ cartItem.id }
          item={ cartItem }
        />)
      }
    </div>
    <FormButton>Go to Checkout</FormButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)
