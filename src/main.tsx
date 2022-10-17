import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MainFooter from './components/MainFooter'
import { IndexRoutes } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
