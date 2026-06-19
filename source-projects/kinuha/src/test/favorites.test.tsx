import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FavoritesProvider, useFavorites } from '../context/FavoritesContext'

function FavoritesProbe() {
  const { favoriteCount, isFavorite, toggleFavorite } = useFavorites()
  return (
    <>
      <span data-testid="count">{favoriteCount}</span>
      <span data-testid="saved">{String(isFavorite('calm-serum'))}</span>
      <button onClick={() => toggleFavorite('calm-serum')}>toggle</button>
    </>
  )
}

describe('FavoritesProvider', () => {
  it('toggles favorite products', async () => {
    const user = userEvent.setup()
    render(<FavoritesProvider><FavoritesProbe /></FavoritesProvider>)
    await user.click(screen.getByText('toggle'))
    expect(screen.getByTestId('count')).toHaveTextContent('1')
    expect(screen.getByTestId('saved')).toHaveTextContent('true')
    await user.click(screen.getByText('toggle'))
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  it('restores favorites from localStorage', () => {
    localStorage.setItem('kinuha-favorites', JSON.stringify(['calm-serum']))
    render(<FavoritesProvider><FavoritesProbe /></FavoritesProvider>)
    expect(screen.getByTestId('saved')).toHaveTextContent('true')
  })
})
