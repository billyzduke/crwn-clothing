// <AcctSignUp />
import React from 'react'

import './index.scss'

import { ReactComponent as ShopBag } from 'assets/shopping-bag.svg'

const CartIcon = () => (
  <div
    className="cart-icon"
  >
    <ShopBag
      className="bag-icon"
    />
    <span
      className="item-count"
    >0</span>
  </div>
)

export default CartIcon
