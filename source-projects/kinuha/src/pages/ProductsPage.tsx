import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import type { Category, Concern } from '../types'

const categories: Category[] = ['落とす', '洗う', '整える', '満たす', '守る', 'セット']
const concerns: Concern[] = ['乾燥', 'ゆらぎ', '毛穴', '肌荒れ予防']

export function ProductsPage() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') ?? '')
  const category = params.get('category') ?? ''
  const concern = params.get('concern') ?? ''
  const price = params.get('price') ?? ''
  const sort = params.get('sort') ?? 'recommended'

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (value) {
      next.set(key, value)
    } else {
      next.delete(key)
    }
    setParams(next)
  }

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    const result = products.filter((product) => {
      const matchesQuery = !normalized || `${product.name}${product.englishName}${product.description}${product.keyIngredients.join('')}`.toLowerCase().includes(normalized)
      const matchesCategory = !category || product.category === category
      const matchesConcern = !concern || product.concerns.includes(concern as Concern)
      const matchesPrice = !price || (price === 'under3000' ? product.price < 3000 : price === '3000to4000' ? product.price >= 3000 && product.price <= 4000 : product.price > 4000)
      return matchesQuery && matchesCategory && matchesConcern && matchesPrice
    })
    return [...result].sort((a, b) => sort === 'price-low' ? a.price - b.price : sort === 'price-high' ? b.price - a.price : Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
  }, [query, category, concern, price, sort])

  return (
    <div className="page-wrap products-page">
      <header className="page-header">
        <p className="eyebrow">OUR PRODUCTS</p><h1>商品を探す</h1>
        <p>今の肌と、毎日のリズムに合うものを。</p>
      </header>
      <div className="shop-layout">
        <aside className="filters" aria-label="商品を絞り込む">
          <label className="search-field">キーワード検索<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="商品名・成分で検索" /></label>
          <FilterGroup title="カテゴリー" values={categories} selected={category} onChange={(value) => updateParam('category', value)} />
          <FilterGroup title="肌悩み" values={concerns} selected={concern} onChange={(value) => updateParam('concern', value)} />
          <FilterGroup title="価格" values={['3,000円未満', '3,000〜4,000円', '4,000円以上']} paramValues={['under3000', '3000to4000', 'over4000']} selected={price} onChange={(value) => updateParam('price', value)} />
          <button className="clear-button" onClick={() => { setParams({}); setQuery('') }}>条件をクリア</button>
        </aside>
        <div className="shop-results">
          <div className="results-toolbar">
            <p><b>{filtered.length}</b> ITEMS</p>
            <label>並び順
              <select value={sort} onChange={(event) => updateParam('sort', event.target.value)}>
                <option value="recommended">おすすめ順</option><option value="price-low">価格が低い順</option><option value="price-high">価格が高い順</option>
              </select>
            </label>
          </div>
          {filtered.length > 0 ? <div className="product-grid shop-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : (
            <div className="empty-state"><h2>条件に合う商品が見つかりませんでした。</h2><p>条件を減らして、もう一度お試しください。</p><button className="secondary-button" onClick={() => { setParams({}); setQuery('') }}>すべての商品を見る</button></div>
          )}
        </div>
      </div>
    </div>
  )
}

function FilterGroup({ title, values, paramValues, selected, onChange }: { title: string; values: string[]; paramValues?: string[]; selected: string; onChange: (value: string) => void }) {
  return (
    <fieldset className="filter-group"><legend>{title}</legend>
      {values.map((value, index) => {
        const actual = paramValues?.[index] ?? value
        return <label key={value}><input type="radio" name={title} checked={selected === actual} onChange={() => onChange(selected === actual ? '' : actual)} /><span>{value}</span></label>
      })}
    </fieldset>
  )
}
