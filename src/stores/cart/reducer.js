import { CartActionTypes } from 'stores/cart/types'
import { addItemToCart } from 'stores/cart/utils'

const INITIAL_STATE = {
  cartItems: [],
  visible: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case CartActionTypes.ADD_ITEM:
    return {
      ...state,
      cartItems: addItemToCart(state.cartItems, action.payload)
    }
  case CartActionTypes.TOGGLE_CART_VISIBILITY:
    return {
      ...state,
      visible: !state.visible
    }
  default:
    return state
  }
}

export default cartReducer
