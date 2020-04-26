// <ShopItem />
import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import FormButton from 'components/form-button'
import { addItem } from 'stores/cart/actions'

const ShopItem = ({ item, addItem }) => {
  console.log('item', item)
  const { name, price, imageUrl } = item
  return (
    <div
      className="collection-item"
    >
      <div
        className="image"
        style={ { backgroundImage: `url(${imageUrl})` } }
      />
      <div
        className="collection-footer"
      >
        <span
          className="name"
        >{ name }</span>
        <span
          className="price"
        >{ price }</span>
      </div>
      <FormButton
        inverted
        onClick={ () => addItem(item) }
      > Add to Cart </FormButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ShopItem)
