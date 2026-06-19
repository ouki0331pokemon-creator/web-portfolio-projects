import { Link } from 'react-router-dom'
import { ProductVisual } from '../components/ProductVisual'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import { ArrowIcon } from '../components/Icons'

export function CartPage() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart()
  const shipping = subtotal >= 5500 ? 0 : 550
  const cartProducts = items.flatMap((item) => {
    const product = products.find((entry) => entry.id === item.productId)
    return product ? [{ ...item, product }] : []
  })

  if (cartProducts.length === 0) return (
    <div className="page-wrap empty-cart">
      <p className="eyebrow">YOUR BAG</p><h1>カートは空です</h1><p>今の肌に合うケアを見つけてみませんか。</p>
      <Link className="primary-button" to="/products">商品を探す <ArrowIcon /></Link>
    </div>
  )

  return (
    <div className="page-wrap cart-page">
      <header className="page-header compact"><p className="eyebrow">YOUR BAG</p><h1>ショッピングカート</h1></header>
      <div className="cart-layout">
        <section className="cart-list" aria-label="カート内の商品">
          {cartProducts.map(({ product, quantity }) => (
            <article className="cart-item" key={product.id}>
              <ProductVisual product={product} compact />
              <div className="cart-item-info"><p className="eyebrow">{product.englishName}</p><h2><Link to={`/products/${product.id}`}>{product.name}</Link></h2><span>{product.volume}</span>
                <div className="cart-item-actions"><label>数量<select value={quantity} onChange={(event) => updateQuantity(product.id, Number(event.target.value))}>{[1, 2, 3, 4, 5].map((num) => <option key={num}>{num}</option>)}</select></label><button onClick={() => removeItem(product.id)}>削除</button></div>
              </div>
              <strong>¥{(product.price * quantity).toLocaleString()}</strong>
            </article>
          ))}
          <button className="clear-button" onClick={clearCart}>カートを空にする</button>
        </section>
        <aside className="order-summary">
          <h2>ご注文内容</h2><dl><div><dt>小計</dt><dd>¥{subtotal.toLocaleString()}</dd></div><div><dt>送料</dt><dd>{shipping ? `¥${shipping}` : '無料'}</dd></div><div className="total"><dt>合計</dt><dd>¥{(subtotal + shipping).toLocaleString()}<small> 税込</small></dd></div></dl>
          {subtotal < 5500 && <p className="shipping-note">あと¥{(5500 - subtotal).toLocaleString()}で送料無料です</p>}
          <button className="primary-button" onClick={() => alert('こちらはポートフォリオ用のため、実際の決済は行われません。')}>購入手続きへ進む <ArrowIcon /></button>
          <p className="demo-note">これは架空のECサイトです。決済は行われません。</p>
        </aside>
      </div>
    </div>
  )
}
