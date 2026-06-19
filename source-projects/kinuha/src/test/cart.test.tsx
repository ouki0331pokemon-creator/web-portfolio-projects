import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartProvider, useCart } from '../context/CartContext'

function CartProbe() {
  const { items, itemCount, subtotal, addItem, updateQuantity, removeItem } = useCart()
  return (
    <>
      <span data-testid="count">{itemCount}</span>
      <span data-testid="subtotal">{subtotal}</span>
      <span data-testid="items">{JSON.stringify(items)}</span>
      <button onClick={() => addItem('dew-lotion')}>add</button>
      <button onClick={() => updateQuantity('dew-lotion', 3)}>update</button>
      <button onClick={() => removeItem('dew-lotion')}>remove</button>
    </>
  )
}

describe('CartProvider', () => {
  it('adds, updates and removes cart items', async () => {
    const user = userEvent.setup()
    render(<CartProvider><CartProbe /></CartProvider>)
    await user.click(screen.getByText('add'))
    expect(screen.getByTestId('count')).toHaveTextContent('1')
    expect(screen.getByTestId('subtotal')).toHaveTextContent('3300')
    await user.click(screen.getByText('update'))
    expect(screen.getByTestId('count')).toHaveTextContent('3')
    await user.click(screen.getByText('remove'))
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  it('restores saved items from localStorage', () => {
    localStorage.setItem('kinuha-cart', JSON.stringify([{ productId: 'calm-serum', quantity: 2 }]))
    render(<CartProvider><CartProbe /></CartProvider>)
    expect(screen.getByTestId('count')).toHaveTextContent('2')
    expect(screen.getByTestId('subtotal')).toHaveTextContent('9240')
  })
})
