# Web Portfolio Projects

個人店舗・小規模事業者向けのWeb制作を想定したポートフォリオと、4作品の開発ソースをまとめたリポジトリです。

[公開ポートフォリオを見る](https://heartfelt-genie-612df7.netlify.app/)

## 採用ご担当者さまへ

- 実際の画面は、下記一覧の「デモ」から操作できます。
- 未圧縮の実装は、各作品の「ソース」から確認できます。
- TypeScript作品にはLintとテストを用意しています。
- すべて自主制作のコンセプト案件です。想定課題に対する設計判断と実装内容を紹介しています。

## 作品一覧

| 作品 | 主な実装 | 技術 | デモ | ソース |
| --- | --- | --- | --- | --- |
| Lumaé Botanical Hair Oil | 商品訴求LP、レスポンシブUI、購入導線デモ | React / Vite / CSS | [表示](https://heartfelt-genie-612df7.netlify.app/projects/lumae/) | [閲覧](./source-projects/lumae/README.md) |
| みなも天然水 | 商品ページ、カート状態管理、複数ページ、テスト | React / TypeScript / React Router / Vitest | [表示](https://heartfelt-genie-612df7.netlify.app/projects/minamo/) | [閲覧](./source-projects/minamo/README.md) |
| KINUHA | 検索・絞り込み、カート、お気に入り、肌診断、テスト | React / TypeScript / React Router / Vitest | [表示](https://heartfelt-genie-612df7.netlify.app/projects/kinuha/) | [閲覧](./source-projects/kinuha/README.md) |
| 余白珈琲 | 店舗紹介、メニュー、予約・問い合わせデモ、複数ページ | React / React Router / Tailwind CSS / Framer Motion | [表示](https://heartfelt-genie-612df7.netlify.app/projects/yohaku/) | [閲覧](./source-projects/yohaku/README.md) |

## リポジトリ構成

```text
.
├─ index.html              # ポートフォリオ本体
├─ style.css
├─ script.js
├─ build.mjs               # Netlify公開用ビルド
├─ images/                 # ポートフォリオ画像
├─ projects/               # 公開デモ用ビルド成果物
└─ source-projects/        # 作品ごとの未圧縮開発ソース
   ├─ lumae/
   ├─ minamo/
   ├─ kinuha/
   └─ yohaku/
```

`projects`は公開画面で使用する最適化済みファイル、`source-projects`はコード確認用の開発プロジェクトです。

## ポートフォリオ本体

- セマンティックHTML
- モバイルファーストのレスポンシブ対応
- キーボード操作可能なナビゲーションと作品詳細
- `prefers-reduced-motion`による動きの軽減
- Netlify Forms対応の問い合わせフォーム
- JavaScript無効時にも主要情報を閲覧可能

## ローカル確認

ポートフォリオ本体の公開用ファイルを生成します。

```bash
node build.mjs
```

各作品は対象ディレクトリで起動できます。

```bash
cd source-projects/<project-name>
npm ci
npm run dev
```

利用可能な検証コマンドは、各作品のREADMEと`package.json`に記載しています。

## 注意事項

掲載している店舗、ブランド、商品、レビュー、予約・購入内容は架空です。実際の販売、決済、予約、個人情報送信は行いません。
