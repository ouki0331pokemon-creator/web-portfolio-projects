import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { products } from '../data/products'
import type { CartItem } from '../types'

interface CartContextValue {
  items: CartItem[]
  itemCount: number
  subtotal: number
  addItem: (productId: string, quantity?: number) => void
  updateQuantity: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'kinuha-cart'

const readStoredCart = (): CartItem[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStoredCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const value = useMemo<CartContextValue>(() => ({
    items,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: items.reduce((sum, item) => {
      const product = products.find((entry) => entry.id === item.productId)
      return sum + (product?.price ?? 0) * item.quantity
    }, 0),
    addItem: (productId, quantity = 1) => setItems((current) => {
      const existing = current.find((item) => item.productId === productId)
      return existing
        ? current.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item)
        : [...current, { productId, quantity }]
    }),
    updateQuantity: (productId, quantity) => setItems((current) =>
      quantity <= 0
        ? current.filter((item) => item.productId !== productId)
        : current.map((item) => item.productId === productId ? { ...item, quantity } : item)
    ),
    removeItem: (productId) => setItems((current) => current.filter((item) => item.productId !== productId)),
    clearCart: () => setItems([]),
  }), [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
