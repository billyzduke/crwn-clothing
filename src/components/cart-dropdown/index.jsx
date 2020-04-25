// <CartDropdown />
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import './index.scss'

import FormButton from 'components/form-button'
import CartItem from 'components/cart-item'
import { selectCartItems } from 'stores/cart/selectors'
import { toggleCartVisibility } from 'stores/cart/actions'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div
    className="cart-dropdown"
  >
    {
      cartItems.length ?
        <>
          <div
            className="cart-items"
          >{
              cartItems.map(cartItem => <CartItem
                key={ cartItem.id }
                item={ cartItem }
              />)
            }
          </div>
          <FormButton
            onClick={ () => {
              history.push('/checkout')
              dispatch(toggleCartVisibility())
            } }
          >Go to Checkout</FormButton>
        </>
        :
        <div
          className="empty-message"
        >Your cart is empty</div>
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
