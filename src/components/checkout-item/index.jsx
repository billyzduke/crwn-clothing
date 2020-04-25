// <CheckoutItem />
import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import { clearItem } from 'stores/cart/actions'

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div
      className="checkout-item"
    >
      <div
        className="image-container"
      >
        <img
          src={ imageUrl }
          alt="item"
        />
      </div>
      <span
        className="item-name"
      >
        { name }
      </span>
      <span
        className="item-price"
      >${ price.toFixed(2) }</span>
      <span
        className="item-quantity"
      >x { quantity }</span>
      <span
        className="item-subtotal"
      >${ (quantity * price).toFixed(2) }</span>
      <div
        className="remove-button"
        onClick={ () => clearItem(cartItem) }
      >
      &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
