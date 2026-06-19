import { useEffect, useMemo, useState } from 'react'
import type { CartItem, Product } from '../types'

const STORAGE_KEY = 'minamo-cart'

const loadCart = (): CartItem[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    const parsed: unknown = JSON.parse(stored)
    if (
      !Array.isArray(parsed) ||
      !parsed.every(
        (item) =>
          typeof item === 'object' &&
          item !== null &&
          'product' in item &&
          'quantity' in item &&
          typeof item.quantity === 'number' &&
          item.quantity > 0,
      )
    ) {
      return []
    }
    return parsed as CartItem[]
  } catch {
    return []
  }
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(loadCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product: Product) => {
    setItems((current) => {
      const existing = current.find((item) => item.product.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...current, { product, quantity: 1 }]
    })
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      setItems((current) => current.filter((item) => item.product.id !== id))
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.product.id === id ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.product.id !== id))
  }

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )
  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0,
      ),
    [items],
  )
  const shipping = subtotal === 0 || subtotal >= 4000 ? 0 : 550

  return {
    items,
    addItem,
    updateQuantity,
    removeItem,
    itemCount,
    subtotal,
    shipping,
    total: subtotal + shipping,
  }
}
