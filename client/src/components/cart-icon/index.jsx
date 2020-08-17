// <CartIcon />
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './index.scss'

import { ReactComponent as ShopBag } from 'assets/shopping-bag.svg'
import { toggleCartVisibility } from 'stores/cart/actions'
import { selectCartQuantiTotal } from 'stores/cart/selectors'

const CartIcon = ({ toggleCartVisibility, quantiTotal }) => (
  <div
    className="cart-icon"
    onClick={ toggleCartVisibility }
  >
    <ShopBag
      className="bag-icon"
    />
    <span
      className="item-count"
    >{ quantiTotal }</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  quantiTotal: selectCartQuantiTotal
})

const mapDispatchToProps = dispatch => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)
