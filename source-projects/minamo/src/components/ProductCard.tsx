import { ArrowRight, Check, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../types'
import { ProductVisual } from './ProductVisual'

type ProductCardProps = {
  product: Product
  onAdd: (product: Product) => void
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <article className={`product-card product-card--${product.accent}`}>
      {product.badge && <span className="product-card__badge">{product.badge}</span>}
      <div className="product-card__visual">
        <ProductVisual
          size="small"
          variant={product.id === 'minamo-2l' ? 'box' : 'bottle'}
        />
      </div>
      <p className="product-card__eyebrow">{product.detail}</p>
      <h3>{product.name}</h3>
      <p className="product-card__volume">{product.volume}</p>
      <div className="product-card__price">
        {product.originalPrice && (
          <span>通常 ¥{product.originalPrice.toLocaleString()}</span>
        )}
        <strong>¥{product.price.toLocaleString()}</strong>
        <small>（税込）</small>
      </div>
      <p className="product-card__note">
        <Check size={15} aria-hidden="true" />
        {product.note}
      </p>
      <Link className="product-card__detail" to={`/products/${product.id}`}>
        商品の詳細を見る <ArrowRight size={15} aria-hidden="true" />
      </Link>
      <button className="button button--dark button--full" onClick={() => onAdd(product)}>
        <ShoppingBag size={18} aria-hidden="true" />
        カートに入れる
      </button>
    </article>
  )
}
