import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store as myCustomStoreName } from './app/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={myCustomStoreName}>
    <App />
  </Provider>
)
