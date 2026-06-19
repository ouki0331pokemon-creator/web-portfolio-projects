import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct, products } from '../data/products'
import { ProductVisual } from '../components/ProductVisual'
import { ProductCard } from '../components/ProductCard'
import { useCart } from '../context/CartContext'
import { CheckIcon } from '../components/Icons'
import { HeartIcon } from '../components/Icons'
import { useFavorites } from '../context/FavoritesContext'
import { NotFoundPage } from './NotFoundPage'

export function ProductDetailPage() {
  const { id } = useParams()
  const product = id ? getProduct(id) : undefined
  const { addItem } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) return <NotFoundPage product />

  const handleAdd = () => {
    addItem(product.id, quantity)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  const related = products.filter((item) => item.id !== product.id && item.concerns.some((concern) => product.concerns.includes(concern))).slice(0, 3)

  return (
    <div className="page-wrap detail-page">
      <nav className="breadcrumbs" aria-label="パンくず"><Link to="/">ホーム</Link><span>/</span><Link to="/products">商品一覧</Link><span>/</span><span>{product.name}</span></nav>
      <section className="product-detail">
        <ProductVisual product={product} />
        <div className="product-info">
          <p className="eyebrow">{product.englishName}</p><h1>{product.name}</h1>
          <p className="detail-lead">{product.description}</p>
          <p className="detail-description">{product.longDescription}</p>
          <div className="concern-tags">{product.concerns.map((concern) => <span key={concern}># {concern}</span>)}</div>
          <div className="detail-price"><strong>¥{product.price.toLocaleString()}</strong><span>税込 / {product.volume}</span></div>
          <div className="buy-row">
            <label>数量<select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}>{[1, 2, 3, 4, 5].map((num) => <option key={num}>{num}</option>)}</select></label>
            <button className={`primary-button ${added ? 'is-added' : ''}`} onClick={handleAdd}>{added ? '追加しました' : 'カートに追加する'}</button>
          </div>
          <button className={`detail-favorite ${isFavorite(product.id) ? 'is-favorite' : ''}`} onClick={() => toggleFavorite(product.id)} aria-pressed={isFavorite(product.id)}>
            <HeartIcon filled={isFavorite(product.id)} /> {isFavorite(product.id) ? 'お気に入りに保存済み' : 'お気に入りに追加'}
          </button>
          <ul className="purchase-notes"><li><CheckIcon />初回購入は送料無料</li><li><CheckIcon />14日以内の返品保証</li><li><CheckIcon />最短2営業日で発送</li></ul>
        </div>
      </section>

      <section className="detail-sections">
        <article><p className="eyebrow">KEY INGREDIENTS</p><h2>肌を想って選んだ成分</h2><div className="ingredient-grid">{product.keyIngredients.map((ingredient, index) => <div key={ingredient}><b>0{index + 1}</b><h3>{ingredient}</h3><p>肌をすこやかに保ち、うるおいを支えるために配合しました。</p></div>)}</div></article>
        <article className="free-from"><div><p className="eyebrow">OUR STANDARD</p><h2>使わないものも、<br />きちんと選びます。</h2></div><ul>{product.freeFrom.map((item) => <li key={item}><CheckIcon />{item} フリー</li>)}</ul></article>
        <details open><summary>全成分</summary><p>{product.ingredients}</p></details>
        <details><summary>使い方</summary><p>{product.howToUse}</p></details>
        <details><summary>使用上の注意</summary><p>{product.caution}</p></details>
      </section>

      <section className="reviews-detail">
        <div className="section-heading split"><div><p className="eyebrow">REVIEWS</p><h2>この商品を使った方の声</h2></div><div className="review-score"><strong>4.8</strong><span>★★★★★<small>{product.reviews.length} reviews</small></span></div></div>
        <div className="voice-grid">{product.reviews.map((review) => <article className="voice-card" key={review.id}><div className="stars">{'★'.repeat(review.rating)}</div><p>{review.text}</p><small>{review.author} / {review.age}</small></article>)}</div>
        <p className="fiction-note">※ レビューはポートフォリオ用の架空の内容です。</p>
      </section>

      <section className="related section"><div className="section-heading centered"><p className="eyebrow">YOU MAY ALSO LIKE</p><h2>こちらもおすすめです</h2></div><div className="product-grid">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></section>
    </div>
  )
}
