import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { products } from '../data/products'
import { useCart } from './useCart'

describe('useCart', () => {
  beforeEach(() => localStorage.clear())

  it('同じ商品を数量として統合し、合計を計算する', () => {
    const { result } = renderHook(() => useCart())

    act(() => {
      result.current.addItem(products[0])
      result.current.addItem(products[0])
    })

    expect(result.current.items).toHaveLength(1)
    expect(result.current.itemCount).toBe(2)
    expect(result.current.subtotal).toBe(4760)
    expect(result.current.shipping).toBe(0)
  })

  it('数量を0にすると商品を削除する', () => {
    const { result } = renderHook(() => useCart())
    act(() => result.current.addItem(products[1]))
    act(() => result.current.updateQuantity(products[1].id, 0))
    expect(result.current.items).toEqual([])
  })

  it('不正な保存データは空のカートとして扱う', () => {
    localStorage.setItem('minamo-cart', '{"broken":true}')
    const { result } = renderHook(() => useCart())
    expect(result.current.items).toEqual([])
  })
})
