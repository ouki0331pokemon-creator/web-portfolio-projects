import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { GuidePage, ProductDetailPage, QualityPage } from './pages/SitePages'
import './styles.css'

const Router = import.meta.env.VITE_PORTFOLIO_BUILD ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/quality" element={<QualityPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
)
