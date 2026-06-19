import { Link } from 'react-router-dom'
import { useState } from 'react'
import type { Product } from '../types'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import { ProductVisual } from './ProductVisual'
import { ArrowIcon, HeartIcon } from './Icons'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [added, setAdded] = useState(false)
  const favorite = isFavorite(product.id)

  const handleAdd = () => {
    addItem(product.id)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1600)
  }

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-card-image" aria-label={`${product.name}の詳細を見る`}>
        <ProductVisual product={product} compact />
        <span className="category-pill">{product.category}</span>
      </Link>
      <button
        className={`favorite-button ${favorite ? 'is-favorite' : ''}`}
        aria-label={favorite ? `${product.name}をお気に入りから削除` : `${product.name}をお気に入りに追加`}
        aria-pressed={favorite}
        onClick={() => toggleFavorite(product.id)}
      >
        <HeartIcon filled={favorite} />
      </button>
      <div className="product-card-content">
        <p className="eyebrow">{product.englishName}</p>
        <h3><Link to={`/products/${product.id}`}>{product.name}</Link></h3>
        <p className="product-description">{product.description}</p>
        <div className="product-meta">
          <span>{product.volume}</span>
          <strong>¥{product.price.toLocaleString()}<small> 税込</small></strong>
        </div>
        <button className={`add-button ${added ? 'is-added' : ''}`} onClick={handleAdd}>
          {added ? 'カートに追加しました' : 'カートに追加'}
          {!added && <ArrowIcon />}
        </button>
      </div>
    </article>
  )
}
