import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { ArrowIcon, HeartIcon } from '../components/Icons'
import { useFavorites } from '../context/FavoritesContext'
import { products } from '../data/products'

export function FavoritesPage() {
  const { favoriteIds } = useFavorites()
  const favorites = products.filter((product) => favoriteIds.includes(product.id))

  if (favorites.length === 0) {
    return (
      <div className="page-wrap empty-favorites">
        <div className="empty-heart"><HeartIcon /></div>
        <p className="eyebrow">YOUR FAVORITES</p>
        <h1>気になる商品を、<br />ここに集めましょう。</h1>
        <p>商品カードのハートを押すと、あとからゆっくり比較できます。</p>
        <Link className="primary-button" to="/products">商品を探す <ArrowIcon /></Link>
      </div>
    )
  }

  return (
    <div className="page-wrap favorites-page">
      <header className="page-header">
        <p className="eyebrow">YOUR FAVORITES</p>
        <h1>お気に入り</h1>
        <p>気になった商品を、じっくり比べてみてください。</p>
      </header>
      <section className="section">
        <div className="favorites-summary"><p><b>{favorites.length}</b> ITEMS SAVED</p><Link to="/skin-quiz" className="text-link">肌診断で選び方を確認 <ArrowIcon /></Link></div>
        <div className="product-grid">{favorites.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
    </div>
  )
}
