# 余白珈琲

京都・東山の町家カフェを題材にした、ポートフォリオ用の複数ページWebサイトです。店舗の空気感だけでなく、メニュー、空間、アクセス、予約前に必要な情報まで迷わず確認できる構成を実装しています。

## 主な実装

- React Routerによる店舗紹介、メニュー、記事、ストアなどのページ遷移
- 共通ヘッダー、モバイルナビゲーション、フッター
- 予約・問い合わせフォームの入力デモ
- Framer Motionによるスクロール表示演出
- Tailwind CSSによるレスポンシブUI
- `prefers-reduced-motion`への配慮

## 使用技術

- React 19
- React Router
- Vite
- Tailwind CSS
- Framer Motion
- lucide-react

## 起動方法

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

店舗、商品、記事、予約・問い合わせ内容はすべて架空です。実際の予約・販売・個人情報送信は行いません。
