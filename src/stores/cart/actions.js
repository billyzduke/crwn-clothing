import { CartActionTypes } from 'stores/cart/types'

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const toggleCartVisibility = cart => ({
  type: CartActionTypes.TOGGLE_CART_VISIBILITY
})
