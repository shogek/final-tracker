import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.page'
import AuthenticationModule from './features/AuthenticationModule/AuthenticationModule'
import './styles/normalize.scss'
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthenticationModule>
      <Home />
    </AuthenticationModule>
  </React.StrictMode>
)
