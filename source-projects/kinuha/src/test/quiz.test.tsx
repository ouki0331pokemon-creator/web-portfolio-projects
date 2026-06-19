import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'
import { FavoritesProvider } from '../context/FavoritesContext'
import { SkinQuizPage } from '../pages/SkinQuizPage'

describe('SkinQuizPage', () => {
  it('shows a recommendation after four answers', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <CartProvider><FavoritesProvider><SkinQuizPage /></FavoritesProvider></CartProvider>
      </MemoryRouter>,
    )
    await user.click(screen.getByText('季節や体調で不安定になりやすい'))
    await user.click(screen.getByText('部分的にカサつき、刺激を感じる'))
    await user.click(screen.getByText('5分ほど。基本のケアを丁寧に'))
    await user.click(screen.getByText('成分が分かりやすく、低刺激なこと'))
    expect(screen.getByText('「ゆらぎケア」', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('今の肌におすすめの商品')).toBeInTheDocument()
  })
})
