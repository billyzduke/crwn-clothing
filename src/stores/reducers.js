import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from 'stores/cart/reducer'
import catalogReducer from 'stores/catalog/reducer'
import userReducer from 'stores/user/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'cart'
  ]
}

const rootReducer = combineReducers({
  cart: cartReducer,
  catalog: catalogReducer,
  user: userReducer
})

export default persistReducer(persistConfig, rootReducer)
