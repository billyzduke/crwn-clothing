// <CartItem />
import React from 'react'

import './index.scss'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div
    className="cart-item"
  >
    <div
      className="item-image"
      style={ { backgroundImage: `url(${ imageUrl })` } }
    />
    <div
      className="item-details"
    >
      <span
        className="item-name"
      >{ name }</span>
      <span
        className="item-price"
      >{ quantity } x ${ price.toFixed(2) }</span>
    </div>
  </div>
)

export default CartItem
