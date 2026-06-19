import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import { BagIcon, CloseIcon, HeartIcon, MenuIcon } from './Icons'

const navItems = [
  { to: '/products', label: '商品一覧' },
  { to: '/products?concern=ゆらぎ', label: '肌悩みから探す' },
  { to: '/skin-quiz', label: '肌診断' },
  { to: '/story', label: '私たちについて' },
  { to: '/faq', label: 'よくあるご質問' },
]

export function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { itemCount } = useCart()
  const { favoriteCount } = useFavorites()
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0 })
  }, [location.pathname, location.search])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">本文へ移動</a>
      <div className="announcement">初回購入は送料無料 | 肌に合わない場合は14日以内返品可能</div>
      <header className="site-header">
        <Link to="/" className="logo" aria-label="KINUHA ホーム">
          KINUHA<span>BOTANICAL SKINCARE</span>
        </Link>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="メインナビゲーション">
          {navItems.map((item) => <NavLink key={item.label} to={item.to}>{item.label}</NavLink>)}
        </nav>
        <div className="header-actions">
          <Link to="/favorites" className="favorite-link" aria-label={`お気に入り、商品${favoriteCount}点`}>
            <HeartIcon filled={favoriteCount > 0} />{favoriteCount > 0 && <b>{favoriteCount}</b>}
          </Link>
          <Link to="/cart" className="cart-link" aria-label={`カート、商品${itemCount}点`}>
            <BagIcon /><span>カート</span>{itemCount > 0 && <b>{itemCount}</b>}
          </Link>
          <button className="menu-button" aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <Link to="/" className="logo logo-light">KINUHA<span>BOTANICAL SKINCARE</span></Link>
            <p>肌と向き合う時間が、<br />少しだけやさしくなりますように。</p>
          </div>
          <div className="footer-links">
            <div><h3>Shopping</h3><Link to="/products">商品一覧</Link><Link to="/skin-quiz">肌診断</Link><Link to="/favorites">お気に入り</Link><Link to="/cart">カート</Link></div>
            <div><h3>About</h3><Link to="/story">私たちについて</Link><Link to="/faq">よくあるご質問</Link><a href="mailto:hello@example.com">お問い合わせ</a></div>
            <div><h3>Guide</h3><Link to="/faq#shipping">配送・送料</Link><Link to="/faq#return">返品について</Link><span>プライバシーポリシー</span></div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>本サイトはポートフォリオ用に制作した架空のブランドサイトです。</p>
          <p>© 2026 KINUHA</p>
        </div>
      </footer>
    </div>
  )
}
