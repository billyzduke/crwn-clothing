import { CartActionTypes } from 'stores/cart/types'

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const clearItem = item => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item
})

export const toggleCartVisibility = cart => ({
  type: CartActionTypes.TOGGLE_VISIBILITY
})
