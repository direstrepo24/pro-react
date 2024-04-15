import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { I18nextProvider } from 'react-i18next'
import i18next from './i18n.config'
import { BrowserRouter } from 'react-router-dom'
import './assets/styles/styles.scss'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
 