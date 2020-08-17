import CartActionTypes from 'stores/cart/types'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from 'stores/cart/utils'

const INITIAL_STATE = {
  cartItems: {},
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
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.TOGGLE_VISIBILITY:
      return {
        ...state,
        visible: !state.visible
      }
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: {}
      }
    default:
      return state
  }
}

export default cartReducer
