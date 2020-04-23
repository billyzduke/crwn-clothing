import { combineReducers } from 'redux'

import userReducer from 'stores/user/reducer'
import cartReducer from 'stores/cart/reducer'

export default combineReducers({
  cart: cartReducer,
  user: userReducer
})
