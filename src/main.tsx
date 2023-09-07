import React from 'react'
import ReactDOM from 'react-dom/client'
import {WeatherApp} from './WeatherApp.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <WeatherApp />
    </Provider>
  </React.StrictMode>,
)
