import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { App } from './App'
import { CartProvider } from './context/CartContext'
import { FavoritesProvider } from './context/FavoritesContext'
import './styles.css'

const Router = import.meta.env.VITE_PORTFOLIO_BUILD ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <CartProvider><FavoritesProvider><App /></FavoritesProvider></CartProvider>
    </Router>
  </StrictMode>,
)
