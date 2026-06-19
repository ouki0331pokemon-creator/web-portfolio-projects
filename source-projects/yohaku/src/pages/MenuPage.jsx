import { Button, PageHero, Reveal } from "../components";

const coffees = [
  {
    name: "余白ブレンド",
    note: "深煎り",
    description: "黒糖のような甘みと、静かに続く余韻。毎日のための一杯です。",
    price: "¥750",
    position: "50% 42%",
  },
  {
    name: "季節の珈琲",
    note: "中煎り",
    description: "その時季に届く豆の個性を、やわらかな口あたりに仕立てます。",
    price: "¥850",
    position: "15% 58%",
  },
  {
    name: "水出し珈琲",
    note: "冷",
    description: "長い時間をかけて抽出した、澄んだ香りとまろやかなコク。",
    price: "¥800",
    position: "86% 60%",
  },
];

const sweets = [
  {
    name: "季節の練り切り",
    note: "一日数量限定",
    description: "移ろう景色を映した、職人仕立ての小さな生菓子。",
    price: "¥650",
    position: "67% 50%",
  },
  {
    name: "白味噌のチーズケーキ",
    note: "自家製",
    description: "白味噌の塩味を忍ばせた、なめらかで軽やかな味わい。",
    price: "¥720",
    position: "34% 74%",
  },
  {
    name: "最中と餡",
    note: "自家製餡",
    description: "香ばしい皮に、ほどよい甘さの粒餡をお好みで。",
    price: "¥600",
    position: "92% 40%",
  },
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <Reveal className="mb-10 grid gap-5 border-t border-line pt-7 md:mb-14 md:grid-cols-[1fr_1.2fr]">
      <div>
        <p className="font-display text-sm uppercase tracking-[0.26em] text-gold">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-3xl font-normal tracking-japanese sm:text-4xl">{title}</h2>
      </div>
      <p className="max-w-xl text-sm font-light leading-8 tracking-japanese text-ink-muted md:justify-self-end">
        {copy}
      </p>
    </Reveal>
  );
}

function MenuCards({ items, imagePosition = "center" }) {
  return (
    <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
      {items.map((item, index) => (
        <Reveal delay={index * 0.08} key={item.name}>
          <article className="group">
            <div className="aspect-[4/5] overflow-hidden bg-surface-muted">
              <img
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                src="/images/coffee-wagashi.png"
                style={{ objectPosition: item.position || imagePosition }}
              />
            </div>
            <div className="border-b border-line py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-[10px] tracking-[0.2em] text-gold">{item.note}</p>
                  <h3 className="font-serif text-xl tracking-japanese">{item.name}</h3>
                </div>
                <p className="pt-6 font-display text-lg">{item.price}</p>
              </div>
              <p className="mt-4 text-xs font-light leading-7 tracking-japanese text-ink-muted">
                {item.description}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      <PageHero
        description="豆を挽く音、湯気の向こうの香り。季節を映す甘味とともに、ゆっくりとお楽しみください。"
        eyebrow="Coffee & Sweets"
        image="/images/coffee-wagashi.png"
        imageAlt="珈琲と季節の甘味"
        imagePosition="50% 48%"
        title="珈琲と甘味"
      />

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-content">
          <SectionHeading
            copy="産地の風景が浮かぶような、澄んだ味わいを目指して。一杯ずつ、時間をかけてお淹れします。"
            eyebrow="Coffee"
            title="珈琲"
          />
          <MenuCards items={coffees} />
        </div>
      </section>

      <section className="bg-surface-muted px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-content">
          <SectionHeading
            copy="素材の輪郭を大切に、甘さは控えめに。珈琲の余韻に寄り添う、季節のひと皿です。"
            eyebrow="Sweets"
            title="甘味"
          />
          <MenuCards items={sweets} />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <Reveal className="mx-auto grid max-w-content overflow-hidden bg-moss text-white lg:grid-cols-2">
          <div className="min-h-[340px] overflow-hidden lg:min-h-[500px]">
            <img
              alt="珈琲と季節の甘味"
              className="h-full w-full object-cover"
              src="/images/coffee-wagashi.png"
              style={{ objectPosition: "50% 48%" }}
            />
          </div>
          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-[#c9b58f]">Pairing</p>
            <h2 className="mt-5 font-serif text-3xl font-normal leading-relaxed tracking-japanese sm:text-4xl">
              重なり合う、
              <br />
              一杯とひと口。
            </h2>
            <p className="mt-7 text-sm font-light leading-8 tracking-japanese text-white/70">
              珈琲の香りと甘味の余韻。その日の豆と菓子から、互いの魅力を引き立てる組み合わせをご案内します。
            </p>
            <p className="mt-7 border-t border-white/20 pt-5 text-xs tracking-japanese text-white/60">
              珈琲と季節の甘味セット　¥1,300〜
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line px-5 py-16 text-center sm:px-8 lg:px-12 lg:py-24">
        <Reveal className="mx-auto max-w-2xl">
          <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Information</p>
          <h2 className="mt-4 font-serif text-2xl tracking-japanese sm:text-3xl">メニューのご案内</h2>
          <p className="mt-6 text-sm font-light leading-8 tracking-japanese text-ink-muted">
            季節や仕入れにより、内容は少しずつ変わります。
            <br className="hidden sm:block" />
            アレルギーをお持ちの方は、ご注文の際にお申し付けください。
          </p>
          <Button className="mt-9" to="/reservation">席を予約する</Button>
        </Reveal>
      </section>
    </>
  );
}
