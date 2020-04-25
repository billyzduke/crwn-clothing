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
  case CartActionTypes.CLEAR_ITEM:
    return {
      ...state,
      cartItems: state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      )
    }
  case CartActionTypes.TOGGLE_VISIBILITY:
    return {
      ...state,
      visible: !state.visible
    }
  default:
    return state
  }
}

export default cartReducer
