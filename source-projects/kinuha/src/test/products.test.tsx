import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'
import { ProductsPage } from '../pages/ProductsPage'
import { FavoritesProvider } from '../context/FavoritesContext'

function renderPage(route = '/products') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <CartProvider><FavoritesProvider><ProductsPage /></FavoritesProvider></CartProvider>
    </MemoryRouter>,
  )
}

describe('ProductsPage', () => {
  it('filters products from URL concern', () => {
    renderPage('/products?concern=毛穴')
    expect(screen.getByText('ソフト フォームウォッシュ')).toBeInTheDocument()
    expect(screen.queryByText('ヴェール モイスチャークリーム')).not.toBeInTheDocument()
  })

  it('searches by ingredient and shows empty state', async () => {
    const user = userEvent.setup()
    renderPage()
    const input = screen.getByPlaceholderText('商品名・成分で検索')
    await user.type(input, 'ツボクサ')
    expect(screen.getByText('カーム リペアセラム')).toBeInTheDocument()
    await user.clear(input)
    await user.type(input, '存在しない商品')
    expect(screen.getByText('条件に合う商品が見つかりませんでした。')).toBeInTheDocument()
  })
})
