import type { Product } from '../types'

export const products: Product[] = [
  {
    id: 'minamo-500',
    name: 'みなも 500ml',
    detail: '持ち歩きや毎日の食卓に',
    volume: '500ml × 24本',
    price: 2380,
    accent: 'sky',
    note: '1本あたり約99円',
  },
  {
    id: 'minamo-2l',
    name: 'みなも 2L',
    detail: '料理や家族みんなの水分補給に',
    volume: '2L × 9本',
    price: 1980,
    accent: 'navy',
    note: 'まとめ買いにおすすめ',
  },
  {
    id: 'minamo-subscription',
    name: 'みなも 定期便',
    detail: '毎月届いて、買い忘れなし',
    volume: '500ml × 24本 / 月',
    price: 1980,
    originalPrice: 2380,
    badge: '初回・毎月 16% OFF',
    accent: 'green',
    note: '送料無料・いつでも変更可能',
  },
]
