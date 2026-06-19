import type { Product } from '../types'

export function ProductVisual({ product, compact = false }: { product: Product; compact?: boolean }) {
  return (
    <div className={`product-visual ${compact ? 'compact' : ''}`} style={{ '--product-color': product.color } as React.CSSProperties}>
      <span className="visual-leaf leaf-one" />
      <span className="visual-leaf leaf-two" />
      <div className={`package package-${product.shape}`}>
        {product.shape === 'dropper' && <span className="dropper-top" />}
        {product.shape === 'pump' && <span className="pump-top" />}
        <span className="package-mark">K</span>
        <span className="package-name">{product.englishName.split(' ')[0]}</span>
      </div>
      {product.shape === 'set' && <div className="package package-tube mini"><span className="package-mark">K</span></div>}
    </div>
  )
}
