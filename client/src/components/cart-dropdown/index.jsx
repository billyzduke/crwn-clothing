// <CartDropdown />
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './index.scss'

import FormButton from 'components/form-button'
import CartItem from 'components/cart-item'
import { selectCartItems } from 'stores/cart/selectors'
import { selectProductsFromIds } from 'stores/catalog/selectors'
import { toggleCartVisibility } from 'stores/cart/actions'

const CartDropdown = ({ cartItems, cartProducts, history, dispatch }) => {
  // console.log('cartItems', cartItems)
  // console.log('cartProducts', cartProducts)
  return (
    <div
      className="cart-dropdown"
    >
      {
        cartProducts ?
          <>
            <div
              className="cart-items"
            >{
                Object.entries(cartProducts).map(([pid, product]) => (
                  <CartItem
                    key={ pid }
                    quantity={ cartItems[pid] }
                    item={ product }
                  />
                ))
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
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  cartProducts: selectProductsFromIds(Object.keys(state.cart.cartItems))(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
