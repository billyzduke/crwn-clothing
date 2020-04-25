// <CheckoutItem />
import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import { clearItem, addItem, removeItem } from 'stores/cart/actions'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
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
      <span>&#10005;</span>
      <span
        className="item-quantity"
      >
        <div
          className="q-arrow"
          onClick={ () => removeItem(cartItem) }
        >&#10094;</div>
        <span
          className="q-value"
        >{ quantity }</span>
        <div
          className="q-arrow"
          onClick={ () => addItem(cartItem) }
        >&#10095;</div>
      </span>
      <span>=</span>
      <span
        className="item-subtotal"
      >${ (quantity * price).toFixed(2) }</span>
      <div
        className="remove-button"
        onClick={ () => clearItem(cartItem) }
      >&#128465;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
