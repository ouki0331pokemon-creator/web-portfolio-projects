import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

interface FavoritesContextValue {
  favoriteIds: string[]
  favoriteCount: number
  isFavorite: (productId: string) => boolean
  toggleFavorite: (productId: string) => void
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null)
const STORAGE_KEY = 'kinuha-favorites'

const readFavorites = (): string[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(readFavorites)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds))
  }, [favoriteIds])

  const value = useMemo<FavoritesContextValue>(() => ({
    favoriteIds,
    favoriteCount: favoriteIds.length,
    isFavorite: (productId) => favoriteIds.includes(productId),
    toggleFavorite: (productId) => setFavoriteIds((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    ),
  }), [favoriteIds])

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('useFavorites must be used within FavoritesProvider')
  return context
}
