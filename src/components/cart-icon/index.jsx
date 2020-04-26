// <CartIcon />
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './index.scss'

import { ReactComponent as ShopBag } from 'assets/shopping-bag.svg'
import { toggleCartVisibility } from 'stores/cart/actions'
import { selectCartItemsCount } from 'stores/cart/selectors'

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

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)
