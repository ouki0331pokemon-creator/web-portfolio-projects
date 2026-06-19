import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import type { CartItem } from '../types'

type CartDrawerProps = {
  open: boolean
  items: CartItem[]
  subtotal: number
  shipping: number
  total: number
  onClose: () => void
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
  onCheckout: () => void
}

export function CartDrawer({
  open,
  items,
  subtotal,
  shipping,
  total,
  onClose,
  onQuantityChange,
  onRemove,
  onCheckout,
}: CartDrawerProps) {
  return (
    <>
      <button
        className={`cart-backdrop ${open ? 'is-open' : ''}`}
        onClick={onClose}
        aria-label="カートを閉じる"
        tabIndex={open ? 0 : -1}
      />
      <aside
        className={`cart-drawer ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        aria-label="ショッピングカート"
      >
        <div className="cart-drawer__header">
          <div>
            <span className="section-kicker">YOUR CART</span>
            <h2>ショッピングカート</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="カートを閉じる">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span><ShoppingBag size={30} /></span>
            <h3>カートは空です</h3>
            <p>毎日に合う「みなも」を選んでください。</p>
            <button className="text-link" onClick={onClose}>
              商品を見る
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(({ product, quantity }) => (
                <article className="cart-item" key={product.id}>
                  <div className="cart-item__image">
                    <span className="mini-bottle">み</span>
                  </div>
                  <div className="cart-item__body">
                    <div className="cart-item__title">
                      <div>
                        <h3>{product.name}</h3>
                        <p>{product.volume}</p>
                      </div>
                      <button
                        className="remove-button"
                        onClick={() => onRemove(product.id)}
                        aria-label={`${product.name}を削除`}
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                    <div className="cart-item__footer">
                      <div className="quantity">
                        <button
                          onClick={() => onQuantityChange(product.id, quantity - 1)}
                          aria-label={`${product.name}を1つ減らす`}
                        >
                          <Minus size={14} />
                        </button>
                        <span aria-label={`数量 ${quantity}`}>{quantity}</span>
                        <button
                          onClick={() => onQuantityChange(product.id, quantity + 1)}
                          aria-label={`${product.name}を1つ増やす`}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <strong>¥{(product.price * quantity).toLocaleString()}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="cart-summary">
              <div><span>小計</span><span>¥{subtotal.toLocaleString()}</span></div>
              <div>
                <span>送料</span>
                <span>{shipping === 0 ? '無料' : `¥${shipping.toLocaleString()}`}</span>
              </div>
              {shipping > 0 && (
                <p>あと¥{(4000 - subtotal).toLocaleString()}で送料無料</p>
              )}
              <div className="cart-summary__total">
                <strong>合計</strong>
                <strong>¥{total.toLocaleString()} <small>税込</small></strong>
              </div>
              <button className="button button--dark button--full" onClick={onCheckout}>
                購入手続きへ
              </button>
              <small className="cart-summary__demo">※ ポートフォリオ用デモサイトです</small>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
