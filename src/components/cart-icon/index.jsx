// <CartIcon />
import React from 'react'
import { connect } from 'react-redux'

import { toggleCartVisibility } from 'stores/cart/actions'

import './index.scss'

import { ReactComponent as ShopBag } from 'assets/shopping-bag.svg'

const CartIcon = ({ toggleCartVisibility }) => (
  <div
    className="cart-icon"
    onClick={ toggleCartVisibility }
  >
    <ShopBag
      className="bag-icon"
    />
    <span
      className="item-count"
    >0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility())
})

export default connect(null, mapDispatchToProps)(CartIcon)
