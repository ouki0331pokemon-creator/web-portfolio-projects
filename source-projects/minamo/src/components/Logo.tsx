import { Droplets } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="みなも天然水 トップへ">
      <span className="logo__mark" aria-hidden="true">
        <Droplets size={20} />
      </span>
      <span>
        <strong>みなも</strong>
        <small>MINAMO NATURAL WATER</small>
      </span>
    </Link>
  )
}
