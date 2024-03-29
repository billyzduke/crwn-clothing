import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.scss'
import App from 'App'

import { store, persistor } from 'stores'

ReactDOM.render(
  <Provider
    store={ store }
  >
    <BrowserRouter>
      <PersistGate
        persistor={ persistor }
      >
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
