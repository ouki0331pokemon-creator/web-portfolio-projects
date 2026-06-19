export type Product = {
  id: string
  name: string
  detail: string
  volume: string
  price: number
  originalPrice?: number
  badge?: string
  accent: 'sky' | 'navy' | 'green'
  note: string
}

export type CartItem = {
  product: Product
  quantity: number
}
