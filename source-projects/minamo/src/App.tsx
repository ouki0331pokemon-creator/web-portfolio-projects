import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Baby,
  Check,
  ChevronDown,
  Clock3,
  Coffee,
  Droplet,
  FlaskConical,
  Heart,
  Leaf,
  Menu,
  Mountain,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Utensils,
  X,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { CartDrawer } from './components/CartDrawer'
import { Logo } from './components/Logo'
import { ProductCard } from './components/ProductCard'
import { products } from './data/products'
import { useCart } from './hooks/useCart'

const reasons = [
  {
    icon: Mountain,
    number: '01',
    title: '森が育んだ、国産天然水',
    text: '山深い水源で長い時間をかけて磨かれた、澄みきった天然水をそのままボトリング。',
  },
  {
    icon: Droplet,
    number: '02',
    title: '家族にやさしい軟水',
    text: '硬度28mg/Lのまろやかな軟水。小さなお子さまからご年配の方まで飲みやすい口あたりです。',
  },
  {
    icon: Truck,
    number: '03',
    title: '玄関まで、らくらく配送',
    text: '重たい水を運ぶ必要はありません。必要なときに、ご自宅まで丁寧にお届けします。',
  },
]

const reviews = [
  {
    quote: '子どもが「このお水おいしい」と自分から飲むようになりました。買い物で重たい思いをしなくていいのも助かります。',
    name: '東京都・30代',
    role: '2児のお母さま',
  },
  {
    quote: 'クセがなく、コーヒーの味もすっきり。定期便は変更が簡単なので、一人暮らしでも無理なく続けられています。',
    name: '神奈川県・20代',
    role: '会社員',
  },
  {
    quote: '毎朝の白湯と料理に使っています。やわらかな口あたりで、家族みんなのお気に入りになりました。',
    name: '長野県・60代',
    role: 'ご夫婦',
  },
]

const faqs = [
  ['赤ちゃんや子どもにも使えますか？', '硬度28mg/Lの軟水を想定しており、日々の水分補給や調乳にも使いやすい設計です。本サイトの商品情報はすべて架空です。'],
  ['賞味期限と保管方法を教えてください。', '未開封で製造から24か月の想定です。直射日光や高温多湿を避け、常温で保管してください。'],
  ['送料はいくらですか？', 'ご注文金額4,000円以上と定期便は送料無料、通常は全国一律550円という架空の料金設定です。'],
  ['定期便はいつでも変更・停止できますか？', '次回発送予定日の7日前までであれば、マイページから数量・配送間隔の変更や停止ができる想定です。'],
  ['採水地や品質検査について教えてください。', '長野県北部の架空の水源を設定しています。製造ロットごとに微生物・成分検査を行う想定です。'],
]

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState('')
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const cart = useCart()

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(''), 2600)
    return () => window.clearTimeout(timer)
  }, [toast])

  useEffect(() => {
    document.body.style.overflow = cartOpen || checkoutOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [cartOpen, checkoutOpen])

  const addToCart = (product: (typeof products)[number]) => {
    cart.addItem(product)
    setToast(`${product.name}をカートに追加しました`)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell" id="top">
      <div className="announcement">
        <p><Truck size={15} /> 4,000円以上のご注文で送料無料</p>
        <span>｜</span>
        <p>定期便なら、いつでも送料無料</p>
      </div>

      <header className="header">
        <div className="container header__inner">
          <Logo />
          <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="メインナビゲーション">
            <Link to="/#features" onClick={closeMenu}>みなもの特徴</Link>
            <Link to="/quality" onClick={closeMenu}>採水地・品質管理</Link>
            <a href="#products" onClick={closeMenu}>商品一覧</a>
            <Link to="/guide" onClick={closeMenu}>ご利用ガイド</Link>
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

      <main>
        <section className="hero">
          <div className="hero__image" role="img" aria-label="緑豊かな森の清流とみなも天然水のボトル" />
          <div className="hero__shade" />
          <div className="container hero__content">
            <p className="hero__eyebrow"><Leaf size={15} /> JAPAN NATURAL WATER</p>
            <h1>
              毎日の水だから、<br />
              <em>家族にやさしい</em>ものを。
            </h1>
            <p className="hero__lead">
              森の深くで磨かれた、まろやかな国産軟水。<br />
              みなもは、家族の毎日にすっとなじむ天然水です。
            </p>
            <div className="hero__actions">
              <a className="button button--dark" href="#products">
                商品を見る <ArrowRight size={18} />
              </a>
              <Link className="hero__link" to="/quality">
                水のおいしさを知る <ArrowDown size={16} />
              </Link>
            </div>
            <div className="hero__facts">
              <div><strong>28</strong><span>mg/L<br />やさしい軟水</span></div>
              <div><strong>7.2</strong><span>pH<br />ほぼ中性</span></div>
              <div><strong>120</strong><span>m<br />地下水脈</span></div>
            </div>
          </div>
          <p className="hero__disclaimer">※ 商品・数値はポートフォリオ用の架空設定です</p>
        </section>

        <section className="concerns section">
          <div className="container concerns__grid">
            <div>
              <span className="section-kicker">FOR YOUR FAMILY</span>
              <h2 className="section-title">こんなこと、<br />気になっていませんか？</h2>
            </div>
            <div className="concern-list">
              {[
                '子どもが毎日飲む水、本当に安心できる？',
                '水を箱で買うと、家まで運ぶのが大変。',
                'からだに良くても、高すぎると続けられない。',
              ].map((text, index) => (
                <div className="concern-item" key={text}>
                  <span>0{index + 1}</span>
                  <p>{text}</p>
                </div>
              ))}
              <p className="concerns__answer">
                <Sparkles size={19} />
                みなもなら、安心も手軽さも、ちょうどいい価格も。
              </p>
            </div>
          </div>
        </section>

        <section className="features section" id="features">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-kicker">WHY MINAMO?</span>
              <h2 className="section-title">みなもが選ばれる、3つの理由</h2>
              <p>家族の毎日に寄り添う水であるために、私たちが大切にしていること。</p>
            </div>
            <div className="reason-grid">
              {reasons.map(({ icon: Icon, number, title, text }) => (
                <article className="reason-card" key={number}>
                  <span className="reason-card__number">{number}</span>
                  <span className="reason-card__icon"><Icon size={27} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quality section" id="quality">
          <div className="quality__image">
            <img
              src={assetUrl('images/minamo-source.jpg')}
              alt="苔むした岩の間から流れる透明な山の湧き水"
              loading="lazy"
              width="1536"
              height="1024"
            />
            <div className="quality__seal">
              <ShieldCheck size={25} />
              <span>国内採水<br /><strong>品質管理</strong></span>
            </div>
          </div>
          <div className="quality__content">
            <span className="section-kicker section-kicker--light">FROM THE FOREST</span>
            <h2 className="section-title">森が育てた水を、<br />新鮮なまま食卓へ。</h2>
            <p className="quality__lead">
              降りそそいだ雨や雪が、幾層もの岩盤をゆっくりと通り抜ける。その長い旅の中で、不純物がろ過され、ほどよいミネラルが溶け込みます。
            </p>
            <div className="process-list">
              <div><span><Mountain /></span><p><strong>深い森の水源</strong>自然環境を守りながら、地下120mから採水。</p></div>
              <div><span><FlaskConical /></span><p><strong>毎日の品質検査</strong>製造ロットごとに、細かな品質検査を実施。</p></div>
              <div><span><PackageCheck /></span><p><strong>水源地でボトリング</strong>空気に触れる時間を抑え、おいしさをそのまま密封。</p></div>
            </div>
            <div className="mineral-table" aria-label="みなも天然水の成分表">
              <div><strong>28</strong><span>硬度<br />mg/L</span></div>
              <div><strong>7.2</strong><span>pH値</span></div>
              <div><strong>8.1</strong><span>カルシウム<br />mg/L</span></div>
              <div><strong>2.0</strong><span>マグネシウム<br />mg/L</span></div>
            </div>
            <Link className="quality__more" to="/quality">
              採水地と品質管理を詳しく見る <ArrowRight size={16} />
            </Link>
            <small>※ 採水地・検査内容・成分値は架空の設定です。</small>
          </div>
        </section>

        <section className="products section" id="products">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-kicker">OUR PRODUCTS</span>
              <h2 className="section-title">暮らしに合う、みなもを。</h2>
              <p>持ち歩きからご家庭のストックまで。続けやすい3つのプランをご用意しました。</p>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard product={product} onAdd={addToCart} key={product.id} />
              ))}
            </div>
            <p className="products__shipping"><Truck size={18} /> 4,000円以上のご注文・定期便は送料無料</p>
          </div>
        </section>

        <section className="lifestyle section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">IN YOUR LIFE</span>
              <h2 className="section-title">いつもの時間を、<br />すこし心地よく。</h2>
            </div>
            <div className="lifestyle__grid">
              <div className="lifestyle__image">
                <img
                  src={assetUrl('images/minamo-family.jpg')}
                  alt="明るい食卓で子どものグラスに水を注ぐ家族"
                  loading="lazy"
                  width="1536"
                  height="1024"
                />
              </div>
              <div className="use-cases">
                {[
                  [Utensils, '食卓に', 'すっきりした味わいで、毎日の食事を引き立てます。'],
                  [Coffee, '料理やコーヒーに', '素材の風味を邪魔しない、まろやかな軟水です。'],
                  [Baby, '家族の水分補給に', '小さなお子さまにも飲みやすいやさしい口あたり。'],
                  [Heart, '運動や外出に', '500mlボトルなら、いつでも気軽に持ち歩けます。'],
                ].map(([Icon, title, text]) => {
                  const UseIcon = Icon as typeof Utensils
                  return (
                    <article key={title as string}>
                      <span><UseIcon size={21} /></span>
                      <div><h3>{title as string}</h3><p>{text as string}</p></div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="reviews section">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-kicker">CUSTOMER VOICES</span>
              <h2 className="section-title">みなもと暮らす、みなさまの声</h2>
              <p>毎日の中で感じた、うれしい変化を伺いました。</p>
            </div>
            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-card__stars" aria-label="5つ星">
                    {[1, 2, 3, 4, 5].map((star) => <Star size={15} fill="currentColor" key={star} />)}
                  </div>
                  <blockquote>“{review.quote}”</blockquote>
                  <div className="review-card__person">
                    <span>{review.name.slice(0, 1)}</span>
                    <p><strong>{review.name}</strong><small>{review.role}</small></p>
                  </div>
                </article>
              ))}
            </div>
            <p className="reviews__note">※ 掲載しているレビューは架空のものです。</p>
          </div>
        </section>

        <section className="subscription section">
          <div className="container subscription__inner">
            <div className="subscription__visual">
              <div className="subscription__circle" />
              <div className="subscription__box">
                <span>みなも</span>
                <small>天然水 500ml × 24本</small>
              </div>
              <div className="subscription__bottle"><span>みなも</span></div>
              <b>16%<small>OFF</small></b>
            </div>
            <div className="subscription__content">
              <span className="section-kicker">MINAMO SUBSCRIPTION</span>
              <h2 className="section-title">続けるなら、<br />お得で便利な定期便。</h2>
              <p>毎月決まった頃に、みなもをご自宅へ。買い忘れも、重たい荷物を運ぶ手間もありません。</p>
              <ul>
                <li><Check /> 毎回16%OFFの ¥1,980（税込）</li>
                <li><Check /> いつでも送料無料</li>
                <li><Check /> 数量・配送間隔を自由に変更</li>
                <li><Check /> 回数のしばりなし。いつでも停止可能</li>
              </ul>
              <button className="button button--dark" onClick={() => addToCart(products[2])}>
                定期便をはじめる <ArrowRight size={18} />
              </button>
              <Link className="subscription__guide" to="/guide#subscription">
                定期便の仕組みを詳しく見る
              </Link>
              <small>次回発送日の7日前まで変更・停止できます。</small>
            </div>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="container faq__inner">
            <div className="faq__heading">
              <span className="section-kicker">FAQ</span>
              <h2 className="section-title">よくあるご質問</h2>
              <p>ご購入前に気になることをまとめました。</p>
              <div className="faq__contact">
                <Clock3 size={20} />
                <p><strong>お客様窓口</strong>平日 9:00–17:00（架空）</p>
              </div>
            </div>
            <div className="accordion">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary><span>Q</span>{question}<ChevronDown size={19} /></summary>
                  <div className="accordion__answer"><span>A</span><p>{answer}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta__inner">
            <span className="final-cta__drop"><Droplet /></span>
            <p>家族の毎日に、やさしい一滴を。</p>
            <h2>今日から、みなものある暮らし。</h2>
            <a className="button button--light" href="#products">
              商品を選ぶ <ArrowRight size={18} />
            </a>
            <div className="final-cta__benefits">
              <span><Check /> 4,000円以上 送料無料</span>
              <span><Check /> 定期便 16%OFF</span>
              <span><Check /> 回数しばりなし</span>
            </div>
          </div>
        </section>
      </main>

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
        onCheckout={() => setCheckoutOpen(true)}
      />

      <div className={`toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite">
        <Check size={18} /> {toast}
      </div>

      {checkoutOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="demo-title">
          <div className="modal__card">
            <span><Sparkles /></span>
            <h2 id="demo-title">デモ体験はここまでです</h2>
            <p>このサイトはポートフォリオ用の架空サイトのため、実際の決済や個人情報の入力は行いません。</p>
            <button className="button button--dark" onClick={() => setCheckoutOpen(false)}>カートに戻る</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
