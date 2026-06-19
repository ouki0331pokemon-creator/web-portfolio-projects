import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { StoryPage } from './pages/StoryPage'
import { FaqPage } from './pages/FaqPage'
import { CartPage } from './pages/CartPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SkinQuizPage } from './pages/SkinQuizPage'
import { FavoritesPage } from './pages/FavoritesPage'

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/skin-quiz" element={<SkinQuizPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}
