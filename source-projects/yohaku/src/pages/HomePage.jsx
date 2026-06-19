import { ArrowDown, Clock, MapPin } from "lucide-react";
import { Button, Reveal } from "../components";

const menuItems = [
  { name: "余白ブレンド", note: "深煎り・黒糖の余韻", price: "¥680" },
  { name: "季節の珈琲", note: "その時季だけの一杯", price: "¥750" },
  { name: "珈琲と上生菓子", note: "本日の甘味との取り合わせ", price: "¥1,350" },
];

export default function HomePage() {
  return (
    <main>
      <section className="grid min-h-screen border-b border-line pt-20 lg:grid-cols-2 lg:pt-24">
        <div className="flex items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <Reveal className="mx-auto w-full max-w-xl">
            <p className="font-display text-sm uppercase tracking-[0.32em] text-gold">
              Coffee, sweets and silence
            </p>
            <h1 className="mt-7 font-serif text-5xl font-normal leading-[1.35] tracking-[0.14em] sm:text-6xl lg:text-7xl">
              珈琲と甘味、
              <br />
              静かな余白。
            </h1>
            <p className="mt-8 max-w-md text-sm font-light leading-8 tracking-japanese text-ink-muted sm:text-base">
              京都・東山の古い町家で、一杯ずつ丁寧に淹れる珈琲と、季節の甘味をお出ししています。
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/menu">お品書きを見る</Button>
              <Button to="/reservation" variant="outline">席を予約する</Button>
            </div>
          </Reveal>
        </div>
        <div className="relative min-h-[54vh] overflow-hidden lg:min-h-0">
          <img
            alt="町家の中庭に面した静かな喫茶空間"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-[1.02]"
            src="/images/courtyard-hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <a
            aria-label="次のセクションへ"
            className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center border border-white/60 text-white transition-colors hover:bg-white hover:text-ink"
            href="#philosophy"
          >
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36" id="philosophy">
        <Reveal className="mx-auto grid max-w-content gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Our philosophy</p>
          <div>
            <h2 className="font-serif text-3xl leading-[1.7] tracking-japanese sm:text-4xl">
              何もしない時間も、
              <br />
              暮らしの大切な一部です。
            </h2>
            <div className="mt-8 grid gap-6 text-sm font-light leading-8 tracking-japanese text-ink-muted sm:grid-cols-2">
              <p>急ぐ日々の途中で、ふと立ち止まる場所。器の手触りや湯気の向こうに、自分の呼吸を取り戻せる時間をつくります。</p>
              <p>豆の個性、菓子の季節、古い建物の記憶。足しすぎず、削りすぎず、その間に生まれる余白を大切にしています。</p>
            </div>
            <Button className="mt-9" to="/about" variant="outline">私たちについて</Button>
          </div>
        </Reveal>
      </section>

      <section className="bg-surface-muted px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-content">
          <Reveal className="flex flex-col gap-5 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Coffee & sweets</p>
              <h2 className="mt-4 font-serif text-3xl tracking-japanese sm:text-4xl">珈琲と甘味</h2>
            </div>
            <p className="max-w-md text-sm font-light leading-7 tracking-japanese text-ink-muted">
              珈琲の香りと甘味の余韻が、ゆっくりと重なる組み合わせ。
            </p>
          </Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="overflow-hidden">
                <img alt="珈琲と季節の和菓子" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" src="/images/coffee-wagashi.png" />
              </div>
            </Reveal>
            <Reveal className="lg:pl-10" delay={0.12}>
              <div className="divide-y divide-line border-y border-line">
                {menuItems.map((item) => (
                  <div className="grid grid-cols-[1fr_auto] gap-5 py-6" key={item.name}>
                    <div>
                      <h3 className="font-serif text-lg tracking-japanese">{item.name}</h3>
                      <p className="mt-2 text-xs tracking-japanese text-ink-muted">{item.note}</p>
                    </div>
                    <p className="font-display text-lg">{item.price}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-8" to="/menu">すべてのお品書き</Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="min-h-[420px] overflow-hidden sm:min-h-[520px]">
          <img alt="木と土の気配を残す町家の店内" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" src="/images/machiya-interior.png" />
        </div>
        <div className="flex items-center bg-moss px-5 py-20 text-white sm:px-12 lg:px-16">
          <Reveal className="max-w-lg">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-white/60">The space</p>
            <h2 className="mt-5 font-serif text-3xl leading-[1.6] tracking-japanese sm:text-4xl">
              古いものの時間に、
              <br />
              身を置く。
            </h2>
            <p className="mt-7 text-sm font-light leading-8 tracking-japanese text-white/70">
              築百年の町家を、柱や土壁の記憶を残しながら整えました。中庭を眺める席、ひとり静かに過ごす席。それぞれの余白を見つけてください。
            </p>
            <Button className="mt-9" to="/space" variant="light">空間を見る</Button>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Visit us</p>
            <h2 className="mt-4 font-serif text-3xl tracking-japanese sm:text-4xl">店舗のご案内</h2>
            <div className="mt-9 space-y-6 border-y border-line py-7 text-sm tracking-japanese">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="font-light leading-7">京都市東山区<br />京阪「祇園四条駅」より徒歩12分</p>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="font-light leading-7">11:00 - 18:00（L.O. 17:30）<br />火曜・水曜 定休</p>
              </div>
            </div>
            <Button className="mt-8" to="/access" variant="outline">アクセスを見る</Button>
          </Reveal>
          <Reveal delay={0.12}>
            <img alt="京都東山の静かな通り" className="aspect-[3/2] w-full object-cover" src="/images/higashiyama-street.png" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
