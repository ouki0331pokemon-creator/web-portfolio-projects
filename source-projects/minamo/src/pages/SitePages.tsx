import { useEffect, useState, type ReactNode } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  Check,
  ChevronRight,
  CirclePause,
  Clock3,
  CreditCard,
  Droplet,
  FlaskConical,
  Leaf,
  Menu,
  Mountain,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  X,
} from 'lucide-react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { CartDrawer } from '../components/CartDrawer'
import { Logo } from '../components/Logo'
import { ProductVisual } from '../components/ProductVisual'
import { products } from '../data/products'
import { useCart } from '../hooks/useCart'
import type { Product } from '../types'

type PageShellProps = {
  children: ReactNode
  cart: ReturnType<typeof useCart>
  checkoutOpen: boolean
  onCheckoutOpen: () => void
  onCheckoutClose: () => void
}

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

function PageShell({
  children,
  cart,
  checkoutOpen,
  onCheckoutOpen,
  onCheckoutClose,
}: PageShellProps) {
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = cartOpen || checkoutOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [cartOpen, checkoutOpen])

  return (
    <div className="site-shell">
      <div className="announcement">
        <p><Truck size={15} /> 4,000円以上のご注文で送料無料</p>
        <span>｜</span>
        <p>定期便なら、いつでも送料無料</p>
      </div>
      <header className="header">
        <div className="container header__inner">
          <Logo />
          <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="メインナビゲーション">
            <Link to="/#features" onClick={() => setMenuOpen(false)}>みなもの特徴</Link>
            <Link to="/quality" onClick={() => setMenuOpen(false)}>採水地・品質管理</Link>
            <Link to="/#products" onClick={() => setMenuOpen(false)}>商品一覧</Link>
            <Link to="/guide" onClick={() => setMenuOpen(false)}>ご利用ガイド</Link>
          </nav>
          <div className="header__actions">
            <button
              className="cart-button"
              onClick={() => setCartOpen(true)}
              aria-label={`カートを開く、商品数${cart.itemCount}`}
            >
              <ShoppingBag size={20} />
              <span>カート</span>
              {cart.itemCount > 0 && <b>{cart.itemCount}</b>}
            </button>
            <button
              className="menu-button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="container footer__top">
          <div className="footer__brand">
            <Logo />
            <p>森の恵みを、家族の毎日へ。<br />やさしい軟水の国産天然水。</p>
          </div>
          <div className="footer__links">
            <div><strong>商品について</strong><Link to="/#features">みなもの特徴</Link><Link to="/quality">採水地・品質管理</Link><Link to="/#products">商品一覧</Link></div>
            <div><strong>ご利用ガイド</strong><Link to="/guide#shipping">配送・送料</Link><Link to="/guide#subscription">定期便について</Link><Link to="/#faq">よくある質問</Link></div>
            <div><strong>企業情報</strong><span>みなも水産株式会社</span><span>会社概要（架空）</span><span>お問い合わせ</span></div>
          </div>
        </div>
        <div className="container footer__bottom">
          <p>本サイトはポートフォリオ用に制作した架空のECサイトです。実際の商品販売・決済は行っていません。</p>
          <span>© 2026 MINAMO SUISAN Co., Ltd.</span>
        </div>
      </footer>

      <CartDrawer
        open={cartOpen}
        items={cart.items}
        subtotal={cart.subtotal}
        shipping={cart.shipping}
        total={cart.total}
        onClose={() => setCartOpen(false)}
        onQuantityChange={cart.updateQuantity}
        onRemove={cart.removeItem}
        onCheckout={onCheckoutOpen}
      />

      {checkoutOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="page-demo-title">
          <div className="modal__card">
            <span><Sparkles /></span>
            <h2 id="page-demo-title">デモ体験はここまでです</h2>
            <p>ポートフォリオ用の架空サイトのため、実際の決済や個人情報の入力は行いません。</p>
            <button className="button button--dark" onClick={onCheckoutClose}>カートに戻る</button>
          </div>
        </div>
      )}
    </div>
  )
}

function usePageCommerce() {
  const cart = useCart()
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(''), 2600)
    return () => window.clearTimeout(timer)
  }, [toast])

  const addProduct = (product: Product) => {
    cart.addItem(product)
    setToast(`${product.name}をカートに追加しました`)
  }

  return { cart, checkoutOpen, setCheckoutOpen, toast, addProduct }
}

function Breadcrumb({ current }: { current: string }) {
  return (
    <nav className="breadcrumb container" aria-label="パンくずリスト">
      <Link to="/">ホーム</Link>
      <ChevronRight size={13} />
      <span>{current}</span>
    </nav>
  )
}

export function ProductDetailPage() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) ?? products[0]
  const commerce = usePageCommerce()
  const isSubscription = product.id === 'minamo-subscription'

  return (
    <PageShell
      cart={commerce.cart}
      checkoutOpen={commerce.checkoutOpen}
      onCheckoutOpen={() => commerce.setCheckoutOpen(true)}
      onCheckoutClose={() => commerce.setCheckoutOpen(false)}
    >
      <main className="subpage">
        <Breadcrumb current={product.name} />
        <section className="product-detail container">
          <div className={`product-detail__visual product-detail__visual--${product.accent}`}>
            <span className="product-detail__tag">JAPAN NATURAL WATER</span>
            <ProductVisual
              variant={product.id === 'minamo-2l' ? 'box' : 'bottle'}
            />
            <div className="product-detail__rings" />
          </div>
          <div className="product-detail__content">
            {product.badge && <span className="product-detail__badge">{product.badge}</span>}
            <p className="section-kicker">MINAMO PRODUCT</p>
            <h1>{product.name}</h1>
            <p className="product-detail__catch">{product.detail}。まろやかな国産軟水を、必要な分だけご自宅へ。</p>
            <div className="product-detail__meta">
              <span>内容量</span><strong>{product.volume}</strong>
            </div>
            <div className="product-detail__price">
              {product.originalPrice && <del>通常 ¥{product.originalPrice.toLocaleString()}</del>}
              <strong>¥{product.price.toLocaleString()}</strong><small>税込</small>
            </div>
            <ul className="product-detail__benefits">
              <li><Check /> 硬度28mg/Lのやさしい軟水</li>
              <li><Check /> 国内採水・水源地ボトリング</li>
              <li><Check /> {isSubscription ? '毎回送料無料・回数しばりなし' : '4,000円以上のご注文で送料無料'}</li>
            </ul>
            <button className="button button--dark button--full" onClick={() => commerce.addProduct(product)}>
              <ShoppingBag size={18} /> カートに入れる
            </button>
            <p className="product-detail__notice">最短3営業日で発送予定 / 商品情報は架空です</p>
          </div>
        </section>

        <section className="detail-points section">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-kicker">PRODUCT POINTS</span>
              <h2 className="section-title">毎日続けやすい、3つの理由</h2>
            </div>
            <div className="info-card-grid">
              <article><Droplet /><h3>すっと飲める口あたり</h3><p>クセを抑えた軟水なので、そのまま飲むのはもちろん、料理やコーヒーにもよく合います。</p></article>
              <article><ShieldCheck /><h3>毎ロットの品質確認</h3><p>微生物検査や成分検査を行い、基準を満たした水だけを出荷する想定です。</p></article>
              <article><PackageCheck /><h3>暮らしに合わせた容量</h3><p>持ち歩き、ご家庭のストック、定期配送から生活に合う商品を選べます。</p></article>
            </div>
          </div>
        </section>

        <section className="detail-spec section">
          <div className="container detail-spec__grid">
            <div>
              <span className="section-kicker">SPECIFICATION</span>
              <h2 className="section-title">商品情報</h2>
            </div>
            <dl>
              <div><dt>商品名</dt><dd>{product.name}</dd></div>
              <div><dt>内容量</dt><dd>{product.volume}</dd></div>
              <div><dt>原材料名</dt><dd>水（鉱水）</dd></div>
              <div><dt>採水地</dt><dd>長野県北部（架空）</dd></div>
              <div><dt>賞味期限</dt><dd>製造日から24か月</dd></div>
              <div><dt>保存方法</dt><dd>直射日光・高温多湿を避けて保存</dd></div>
            </dl>
          </div>
        </section>
        <PageLinks />
      </main>
      <div className={`toast ${commerce.toast ? 'is-visible' : ''}`} role="status">
        <Check size={18} /> {commerce.toast}
      </div>
    </PageShell>
  )
}

export function QualityPage() {
  const commerce = usePageCommerce()
  const tests = [
    ['01', '原水検査', '採水した水のにおい、色、濁り、成分を確認します。'],
    ['02', 'ろ過・殺菌', '自然のおいしさを保ちながら、衛生基準に沿って処理します。'],
    ['03', '充填検査', 'ボトルの密封状態や異物の有無をセンサーで確認します。'],
    ['04', '出荷判定', '製造ロットごとの記録を確認し、合格品のみ出荷します。'],
  ]

  return (
    <PageShell
      cart={commerce.cart}
      checkoutOpen={commerce.checkoutOpen}
      onCheckoutOpen={() => commerce.setCheckoutOpen(true)}
      onCheckoutClose={() => commerce.setCheckoutOpen(false)}
    >
      <main className="subpage">
        <Breadcrumb current="採水地・品質管理" />
        <section className="page-hero page-hero--quality">
          <div className="container page-hero__content">
            <span className="section-kicker section-kicker--light">SOURCE & QUALITY</span>
            <h1>自然が磨いた水を、<br />確かな品質で届ける。</h1>
            <p>水源の環境からボトリング、出荷まで。毎日飲むものだから、見えない工程にも誠実に向き合います。</p>
          </div>
        </section>

        <section className="source-story section">
          <div className="container source-story__grid">
            <div className="source-story__image">
              <img src={assetUrl('images/minamo-source.jpg')} alt="森の岩間を流れる透明な湧き水" />
            </div>
            <div>
              <span className="section-kicker">THE WATER SOURCE</span>
              <h2 className="section-title">標高1,200m、<br />森に守られた水源。</h2>
              <p>舞台は長野県北部にある架空の水源地。冬に積もった雪と森に降る雨が、幾層もの岩盤を長い年月をかけて通り抜けます。</p>
              <p>地中で自然にろ過された水は、ミネラル量が控えめなやさしい軟水。日々の食事や小さなお子さまの水分補給にもなじむ味わいです。</p>
              <div className="source-facts">
                <div><Mountain /><strong>1,200m</strong><span>水源地の標高</span></div>
                <div><Droplet /><strong>120m</strong><span>地下水脈</span></div>
                <div><Leaf /><strong>28mg/L</strong><span>軟水の硬度</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="inspection section">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-kicker">QUALITY PROCESS</span>
              <h2 className="section-title">ボトルになるまでの品質管理</h2>
              <p>採水から出荷まで、4つの工程で品質を確認する想定です。</p>
            </div>
            <div className="inspection-grid">
              {tests.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <FlaskConical />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quality-data section">
          <div className="container quality-data__grid">
            <div>
              <span className="section-kicker section-kicker--light">MINERAL BALANCE</span>
              <h2 className="section-title">毎日にちょうどいい、<br />まろやかな軟水。</h2>
              <p>ミネラル分が控えめで、素材の風味を邪魔しにくい水質です。数値はすべてポートフォリオ用の架空設定です。</p>
            </div>
            <div className="quality-data__table">
              <div><span>硬度</span><strong>28<small>mg/L</small></strong></div>
              <div><span>pH値</span><strong>7.2</strong></div>
              <div><span>カルシウム</span><strong>8.1<small>mg/L</small></strong></div>
              <div><span>マグネシウム</span><strong>2.0<small>mg/L</small></strong></div>
              <div><span>ナトリウム</span><strong>5.4<small>mg/L</small></strong></div>
              <div><span>カリウム</span><strong>1.1<small>mg/L</small></strong></div>
            </div>
          </div>
        </section>
        <PageLinks />
      </main>
    </PageShell>
  )
}

export function GuidePage() {
  const commerce = usePageCommerce()

  return (
    <PageShell
      cart={commerce.cart}
      checkoutOpen={commerce.checkoutOpen}
      onCheckoutOpen={() => commerce.setCheckoutOpen(true)}
      onCheckoutClose={() => commerce.setCheckoutOpen(false)}
    >
      <main className="subpage">
        <Breadcrumb current="ご利用ガイド" />
        <section className="guide-hero">
          <div className="container">
            <span className="section-kicker">SHOPPING GUIDE</span>
            <h1>みなもを、無理なく<br />続けていただくために。</h1>
            <p>ご注文からお届け、定期便の変更まで。ご利用前に知っておきたいことをまとめました。</p>
          </div>
        </section>

        <nav className="guide-nav container" aria-label="ガイド内メニュー">
          <a href="#shipping"><Truck />配送・送料</a>
          <a href="#payment"><CreditCard />お支払い</a>
          <a href="#subscription"><RefreshCw />定期便</a>
          <a href="#flow"><PackageCheck />お届けまで</a>
        </nav>

        <section className="guide-section section" id="shipping">
          <div className="container guide-section__grid">
            <div className="guide-section__heading">
              <span><Truck /></span>
              <p className="section-kicker">SHIPPING</p>
              <h2 className="section-title">配送・送料</h2>
            </div>
            <div className="guide-panel">
              <h3>通常送料は全国一律550円</h3>
              <p>1回のご注文金額が4,000円以上の場合と、定期便をご利用の場合は送料無料です。</p>
              <dl>
                <div><dt>通常注文</dt><dd>全国一律 550円</dd></div>
                <div><dt>4,000円以上</dt><dd>送料無料</dd></div>
                <div><dt>定期便</dt><dd>いつでも送料無料</dd></div>
                <div><dt>発送時期</dt><dd>ご注文から3営業日以内</dd></div>
              </dl>
              <small>※ 離島を含む配送条件は架空の設定です。</small>
            </div>
          </div>
        </section>

        <section className="guide-section guide-section--tint section" id="payment">
          <div className="container guide-section__grid">
            <div className="guide-section__heading">
              <span><CreditCard /></span>
              <p className="section-kicker">PAYMENT</p>
              <h2 className="section-title">お支払い方法</h2>
            </div>
            <div className="payment-grid">
              <article><CreditCard /><h3>クレジットカード</h3><p>主要5ブランドに対応する想定です。手数料はかかりません。</p></article>
              <article><Clock3 /><h3>あと払い</h3><p>商品到着後にコンビニなどでお支払いいただく想定です。</p></article>
            </div>
          </div>
        </section>

        <section className="guide-section section" id="subscription">
          <div className="container guide-section__grid">
            <div className="guide-section__heading">
              <span><RefreshCw /></span>
              <p className="section-kicker">SUBSCRIPTION</p>
              <h2 className="section-title">定期便について</h2>
            </div>
            <div>
              <div className="subscription-benefit-grid">
                <article><strong>16%</strong><span>毎回割引</span></article>
                <article><Truck /><span>送料無料</span></article>
                <article><CalendarClock /><span>周期変更OK</span></article>
                <article><CirclePause /><span>回数しばりなし</span></article>
              </div>
              <div className="guide-copy">
                <h3>暮らしの変化に合わせて、いつでも調整できます。</h3>
                <p>次回発送予定日の7日前までなら、数量や配送間隔の変更、スキップ、停止ができる想定です。最低利用回数や解約手数料はありません。</p>
                <button className="button button--dark" onClick={() => commerce.addProduct(products[2])}>
                  定期便をカートに入れる <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="guide-section guide-section--dark section" id="flow">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-kicker section-kicker--light">ORDER FLOW</span>
              <h2 className="section-title">ご注文からお届けまで</h2>
            </div>
            <div className="order-flow">
              <article><span>01</span><ShoppingBag /><h3>商品を選ぶ</h3><p>容量や配送方法から、暮らしに合う商品を選択。</p></article>
              <article><span>02</span><CreditCard /><h3>ご注文</h3><p>お届け先と支払い方法を入力して注文を確定。</p></article>
              <article><span>03</span><PackageCheck /><h3>出荷準備</h3><p>品質と梱包状態を確認し、3営業日以内に発送。</p></article>
              <article><span>04</span><Truck /><h3>ご自宅へ</h3><p>重たい水を玄関先まで丁寧にお届けします。</p></article>
            </div>
          </div>
        </section>
        <PageLinks />
      </main>
      <div className={`toast ${commerce.toast ? 'is-visible' : ''}`} role="status">
        <Check size={18} /> {commerce.toast}
      </div>
    </PageShell>
  )
}

function PageLinks() {
  return (
    <section className="page-links section">
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="section-kicker">EXPLORE MINAMO</span>
          <h2 className="section-title">みなもを、もっと知る。</h2>
        </div>
        <div className="page-links__grid">
          <Link to="/quality"><ShieldCheck /><span><small>SOURCE & QUALITY</small>採水地・品質管理</span><ArrowRight /></Link>
          <Link to="/guide"><Truck /><span><small>SHOPPING GUIDE</small>ご利用ガイド</span><ArrowRight /></Link>
          <Link to="/#products"><ShoppingBag /><span><small>PRODUCTS</small>商品一覧へ戻る</span><ArrowRight /></Link>
        </div>
        <Link className="back-home" to="/"><ArrowLeft size={16} /> トップページへ戻る</Link>
      </div>
    </section>
  )
}
