import { combineReducers } from 'redux'

import userReducer from 'reduxxx/user/reducer'

export default combineReducers({
  user: userReducer
})
