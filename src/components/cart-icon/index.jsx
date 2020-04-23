// <CartIcon />
import React from 'react'
import { connect } from 'react-redux'

import { toggleCartVisibility } from 'stores/cart/actions'
import { selectCartItemsCount } from 'stores/cart/selectors'

import './index.scss'

import { ReactComponent as ShopBag } from 'assets/shopping-bag.svg'

const CartIcon = ({ toggleCartVisibility, itemCount }) => (
  <div
    className="cart-icon"
    onClick={ toggleCartVisibility }
  >
    <ShopBag
      className="bag-icon"
    />
    <span
      className="item-count"
    >{ itemCount }</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility())
})

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)
