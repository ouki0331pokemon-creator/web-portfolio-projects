import { Button, PageHero, Reveal } from "../components";

const history = [
  { year: "2018", text: "焙煎と菓子づくりを、小さな間借り店舗で始める。" },
  { year: "2020", text: "京都・東山で、長く空き家だった町家と出会う。" },
  { year: "2022", text: "建物の記憶を受け継ぎ、余白珈琲を開く。" },
  { year: "Now", text: "季節と日々に耳を澄ませながら、一杯を届け続ける。" },
];

const ideas = [
  {
    number: "01",
    title: "引き算から考える",
    text: "味も空間も、飾る前に必要なものを見つめます。余計なものを手放した先に、そのものらしさが現れると考えています。",
  },
  {
    number: "02",
    title: "季節に従う",
    text: "豆の状態、菓子の素材、庭の光。毎日同じではないからこそ、その日の最もよいかたちに静かに調整します。",
  },
  {
    number: "03",
    title: "手の仕事を残す",
    text: "効率だけを求めず、淹れる、練る、包むという手の時間を大切に。小さな揺らぎも含めて一杯の温度にします。",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        description="一杯の珈琲をきっかけに、時間の流れが少しだけ緩む。私たちは、そんな静かな場所をつくっています。"
        eyebrow="About us"
        image="/images/courtyard-hero.png"
        imageAlt="光が差し込む余白珈琲の中庭"
        imagePosition="center"
        title={<>余白をつくる、<br />ということ。</>}
      />

      <section className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
          <Reveal>
            <img alt="光が差し込む余白珈琲の中庭" className="aspect-[3/4] w-full object-cover" src="/images/courtyard-hero.png" />
          </Reveal>
          <Reveal className="px-5 sm:px-8 lg:px-0 lg:pr-16" delay={0.12}>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Our belief</p>
            <h2 className="mt-5 font-serif text-3xl leading-[1.65] tracking-japanese sm:text-4xl">
              満たすためではなく、
              <br />
              空けるための一杯。
            </h2>
            <div className="mt-8 space-y-5 text-sm font-light leading-8 tracking-japanese text-ink-muted">
              <p>情報や予定で満ちた毎日に、本当に必要なのは、何かをさらに足すことではないのかもしれません。</p>
              <p>珈琲の香りに意識を向ける。器の重みを感じる。庭を渡る風に気づく。何もしない時間のなかで、心には自然と余白が戻ってきます。</p>
              <p>私たちが届けたいのは、おいしさの先にある、その静かな感覚です。</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-muted px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-content">
          <Reveal className="grid gap-6 border-b border-line pb-10 lg:grid-cols-2">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Our story</p>
              <h2 className="mt-4 font-serif text-3xl tracking-japanese sm:text-4xl">これまでの歩み</h2>
            </div>
            <p className="max-w-lg text-sm font-light leading-8 tracking-japanese text-ink-muted lg:justify-self-end">
              はじまりは、自分たちが心から落ち着ける場所をつくりたい、という小さな願いでした。
            </p>
          </Reveal>
          <div className="mt-4">
            {history.map((item, index) => (
              <Reveal
                className="grid gap-3 border-b border-line py-7 sm:grid-cols-[160px_1fr] sm:items-baseline"
                delay={index * 0.06}
                key={item.year}
              >
                <p className="font-display text-3xl text-gold">{item.year}</p>
                <p className="text-sm font-light leading-8 tracking-japanese">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-content">
          <Reveal className="max-w-2xl">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Three thoughts</p>
            <h2 className="mt-4 font-serif text-3xl leading-[1.6] tracking-japanese sm:text-4xl">
              私たちが大切にする、
              <br />
              三つのこと。
            </h2>
          </Reveal>
          <div className="mt-12 grid border-y border-line md:grid-cols-3">
            {ideas.map((idea, index) => (
              <Reveal
                className="border-b border-line px-1 py-9 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                delay={index * 0.1}
                key={idea.number}
              >
                <p className="font-display text-sm tracking-[0.2em] text-gold">{idea.number}</p>
                <h3 className="mt-6 font-serif text-xl tracking-japanese">{idea.title}</h3>
                <p className="mt-5 text-sm font-light leading-8 tracking-japanese text-ink-muted">{idea.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-moss px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          <Reveal>
            <img alt="余白珈琲の店主が立つ町家の店内" className="aspect-[4/3] w-full object-cover" src="/images/machiya-interior.png" />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-white/55">The owner</p>
            <h2 className="mt-5 font-serif text-3xl tracking-japanese sm:text-4xl">店主より</h2>
            <div className="mt-7 space-y-5 text-sm font-light leading-8 tracking-japanese text-white/70">
              <p>珈琲を淹れる時間が好きです。湯を注ぎ、膨らむ豆を見ていると、慌ただしかった心が少しずつ元の速さに戻っていきます。</p>
              <p>ここを訪れる方にも、それぞれの速さを取り戻していただけたら。言葉を交わす日も、静かに過ごす日も、変わらず一杯を用意してお待ちしています。</p>
            </div>
            <p className="mt-8 font-serif text-lg tracking-[0.18em]">余白珈琲 店主　佐原 誠</p>
            <Button className="mt-9" to="/access" variant="light">お店を訪れる</Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
