import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import STORE from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={STORE}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
