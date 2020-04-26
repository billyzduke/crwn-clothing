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
      <div
        className="item-name"
      >
        <span>{ name }</span>
      </div>
      <div
        className="item-price"
      >
        <span>${ price.toFixed(2) }</span>
      </div>
      <div>
        <span>&#10005;</span>
      </div>
      <div
        className="item-quantity"
      >
        <div
          className="q-wrapper"
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
        </div>
      </div>
      <div>
        <span>=</span>
      </div>
      <div
        className="item-subtotal"
      >
        <span>${ (quantity * price).toFixed(2) }</span>
      </div>
      <div
        className="remove-button"
        onClick={ () => clearItem(cartItem) }
      >
        <span>&#128465;</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
