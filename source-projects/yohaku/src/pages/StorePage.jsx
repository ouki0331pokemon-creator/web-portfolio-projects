import { ArrowRight, Gift, PackageCheck, RefreshCw, Truck } from "lucide-react";
import { useMemo, useState } from "react";
import { Button, PageHero, Reveal } from "../components";

const categories = ["すべて", "珈琲豆", "ドリップバッグ", "甘味・道具"];

const products = [
  { category: "珈琲豆", name: "余白ブレンド 深煎り", note: "200g / チョコレート・黒糖", price: "¥1,680", position: "18% 52%" },
  { category: "珈琲豆", name: "季節のブレンド 霞", note: "200g / 柑橘・花・蜂蜜", price: "¥1,850", position: "48% 50%" },
  { category: "珈琲豆", name: "エチオピア 浅煎り", note: "150g / 白桃・ジャスミン", price: "¥1,760", position: "82% 48%" },
  { category: "ドリップバッグ", name: "ドリップバッグ 5個箱", note: "余白ブレンド / 個包装", price: "¥1,350", position: "24% 72%" },
  { category: "甘味・道具", name: "珈琲羊羹 二棹", note: "小豆・珈琲 / 化粧箱入り", price: "¥2,400", position: "56% 68%" },
  { category: "甘味・道具", name: "真鍮の珈琲匙", note: "手仕事 / 約10cm", price: "¥2,200", position: "84% 69%" },
];

function Newsletter() {
  return (
    <section className="bg-surface-muted px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Store Letter</p>
        <h2 className="mt-4 font-serif text-2xl tracking-japanese sm:text-3xl">オンラインストアからのお便り</h2>
        <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-8 tracking-japanese text-ink-muted">季節の商品や入荷のお知らせを、静かにお届けします。</p>
        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="store-email">メールアドレス</label>
          <input className="min-h-12 flex-1 border border-line bg-surface px-4 text-sm outline-none focus:border-moss" id="store-email" placeholder="メールアドレス" type="email" />
          <button className="group min-h-12 bg-moss px-7 text-xs tracking-[0.18em] text-white transition-colors hover:bg-ink" type="submit">
            登録する <ArrowRight className="ml-3 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </Reveal>
    </section>
  );
}

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("すべて");
  const filteredProducts = useMemo(
    () => activeCategory === "すべて" ? products : products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <PageHero
        description="店でお出ししている珈琲豆や、日々のための道具。余白の時間を、ご自宅へお届けします。"
        eyebrow="Online Store"
        image="/images/store-products.png"
        imageAlt="余白珈琲の珈琲豆とパッケージ"
        imagePosition="center 52%"
        title="オンラインストア"
      />

      <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <Reveal className="mx-auto flex max-w-content flex-wrap justify-center gap-x-8 gap-y-2 border-b border-line">
          {categories.map((category) => (
            <button
              className={`min-h-12 border-b-2 px-1 text-xs tracking-[0.14em] transition-colors ${activeCategory === category ? "border-moss text-moss" : "border-transparent text-ink-muted hover:text-ink"}`}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </Reveal>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <Reveal className="mx-auto grid max-w-content bg-moss text-white lg:grid-cols-2">
          <div className="group min-h-[360px] overflow-hidden lg:min-h-[560px]">
            <img alt="余白珈琲の豆とパッケージ" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" src="/images/store-products.png" />
          </div>
          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-white/55">Seasonal Selection</p>
            <p className="mt-8 text-xs tracking-[0.15em] text-white/60">初夏限定</p>
            <h2 className="mt-4 font-serif text-3xl leading-[1.6] tracking-japanese">季節のブレンド<br />「青時雨」</h2>
            <p className="mt-6 text-sm font-light leading-8 tracking-japanese text-white/70">
              青葉を濡らす雨のような、瑞々しく穏やかな味わい。柑橘の明るさと黒糖の余韻を重ねました。
            </p>
            <p className="mt-6 font-display text-xl tracking-wider">¥1,850 <span className="font-sans text-xs text-white/55">/ 200g</span></p>
            <Button className="mt-9 w-fit" href="#products" variant="light">商品を見る</Button>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-8 lg:px-12 lg:py-24" id="products">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Our Selection</p>
            <h2 className="mt-3 font-serif text-2xl tracking-japanese sm:text-3xl">商品一覧</h2>
          </Reveal>
          <div className="mt-10 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <Reveal delay={index * 0.05} key={product.name}>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface-muted">
                    <img alt="" className="h-full w-full scale-[1.7] object-cover transition-transform duration-700 group-hover:scale-[1.78]" src="/images/store-products.png" style={{ objectPosition: product.position }} />
                    <button className="absolute inset-x-4 bottom-4 min-h-11 translate-y-3 bg-canvas/95 text-xs tracking-[0.14em] opacity-0 transition-all duration-300 hover:bg-moss hover:text-white focus:translate-y-0 focus:opacity-100 group-hover:translate-y-0 group-hover:opacity-100" type="button">カートに入れる</button>
                  </div>
                  <p className="mt-5 text-[10px] tracking-[0.16em] text-gold">{product.category}</p>
                  <div className="mt-2 flex items-start justify-between gap-5">
                    <div>
                      <h3 className="font-serif text-lg tracking-japanese">{product.name}</h3>
                      <p className="mt-2 text-xs font-light tracking-japanese text-ink-muted">{product.note}</p>
                    </div>
                    <p className="shrink-0 font-display text-lg">{product.price}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-content">
          <Reveal className="text-center">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Delivery Guide</p>
            <h2 className="mt-3 font-serif text-2xl tracking-japanese">お届けについて</h2>
          </Reveal>
          <div className="mt-10 grid divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {[
              [Truck, "全国へお届け", "通常、ご注文から3〜5営業日で発送します。"],
              [PackageCheck, "丁寧な梱包", "香りと品質を守る包装でお包みします。"],
              [Gift, "贈りもの", "熨斗とメッセージカードを承ります。"],
              [RefreshCw, "定期便", "お好みの珈琲を毎月お届けします。"],
            ].map(([Icon, title, text], index) => (
              <Reveal className="px-5 py-8 text-center lg:px-8" delay={index * 0.06} key={title}>
                <Icon className="mx-auto h-6 w-6 stroke-[1.25] text-gold" />
                <h3 className="mt-5 font-serif text-base tracking-japanese">{title}</h3>
                <p className="mt-3 text-xs font-light leading-6 tracking-japanese text-ink-muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
