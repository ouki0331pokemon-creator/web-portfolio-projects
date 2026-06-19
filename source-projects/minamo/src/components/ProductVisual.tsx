type ProductVisualProps = {
  size?: 'small' | 'large'
  variant?: 'bottle' | 'box'
}

export function ProductVisual({
  size = 'large',
  variant = 'bottle',
}: ProductVisualProps) {
  if (variant === 'box') {
    return (
      <div className={`product-visual product-visual--${size}`} aria-hidden="true">
        <div className="water-box">
          <span className="water-box__drop" />
          <strong>みなも</strong>
          <small>Natural Water</small>
        </div>
        <div className="bottle bottle--mini">
          <span className="bottle__cap" />
          <span className="bottle__label">みなも</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`product-visual product-visual--${size}`} aria-hidden="true">
      <div className="bottle">
        <span className="bottle__cap" />
        <span className="bottle__shine" />
        <span className="bottle__label">
          <i />
          みなも
          <small>天然水</small>
        </span>
      </div>
    </div>
  )
}
