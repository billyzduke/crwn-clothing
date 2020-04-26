import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from 'stores/user/reducer'
import cartReducer from 'stores/cart/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'cart'
  ]
}

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
})

export default persistReducer(persistConfig, rootReducer)
