import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/Icons'

export function NotFoundPage({ product = false }: { product?: boolean }) {
  return <div className="page-wrap not-found"><p className="eyebrow">404 NOT FOUND</p><h1>{product ? '商品が見つかりませんでした' : 'お探しのページはありません'}</h1><p>URLをご確認いただくか、トップページからお探しください。</p><Link className="primary-button" to={product ? '/products' : '/'}>{product ? '商品一覧へ' : 'トップページへ'} <ArrowIcon /></Link></div>
}
