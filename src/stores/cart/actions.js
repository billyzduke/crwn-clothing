import { CartActionTypes } from 'stores/cart/types'

export const addItem = pid => ({
  type: CartActionTypes.ADD_ITEM,
  payload: pid
})

export const clearItem = pid => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: pid
})

export const removeItem = pid => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: pid
})

export const toggleCartVisibility = () => ({
  type: CartActionTypes.TOGGLE_VISIBILITY
})

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
})
