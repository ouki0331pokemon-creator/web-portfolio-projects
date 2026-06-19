export type Category = '落とす' | '洗う' | '整える' | '満たす' | '守る' | 'セット'
export type Concern = '乾燥' | 'ゆらぎ' | '毛穴' | '肌荒れ予防'

export interface Review {
  id: number
  author: string
  age: string
  rating: number
  text: string
}

export interface Product {
  id: string
  name: string
  englishName: string
  category: Category
  concerns: Concern[]
  price: number
  volume: string
  description: string
  longDescription: string
  keyIngredients: string[]
  freeFrom: string[]
  ingredients: string
  howToUse: string
  caution: string
  color: string
  shape: 'pump' | 'tube' | 'bottle' | 'dropper' | 'jar' | 'set'
  featured?: boolean
  reviews: Review[]
}

export interface CartItem {
  productId: string
  quantity: number
}
