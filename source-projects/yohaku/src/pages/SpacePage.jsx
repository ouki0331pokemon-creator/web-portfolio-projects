import { Button, Reveal } from "../components";

const ideas = [
  ["01", "光", "格子を通る朝の光、庭から差す午後の光。時刻とともに表情を変える明るさを残しました。"],
  ["02", "素材", "土壁、木、石、真鍮。手の跡と時間の変化が美しくなる、素朴な素材を選んでいます。"],
  ["03", "静けさ", "音を満たすのではなく、珈琲を淹れる音や庭の気配が届く静けさを整えました。"],
];

const seats = [
  {
    title: "庭を眺める席",
    english: "Garden seats",
    copy: "季節の移ろいを近くに感じる、ゆったりとした席。二名様までお掛けいただけます。",
    image: "/images/courtyard-hero.png",
    position: "50% 52%",
  },
  {
    title: "ひとりの席",
    english: "Counter seats",
    copy: "読書や思索のための、小さな余白。壁際と窓辺に一名席をご用意しています。",
    image: "/images/machiya-interior.png",
    position: "62% 50%",
  },
];

export default function SpacePage() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-ink sm:min-h-[88vh]">
        <img
          alt="町家の中庭に面した余白珈琲の空間"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          src="/images/courtyard-hero.png"
          style={{ objectPosition: "50% 52%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/30" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-content items-end px-5 pb-14 pt-32 text-white sm:min-h-[88vh] sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <Reveal>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-white/70">Space</p>
            <h1 className="mt-5 font-serif text-4xl font-normal leading-[1.45] tracking-japanese sm:text-5xl lg:text-6xl">
              光と静けさの、
              <br />
              あわいに。
            </h1>
            <p className="mt-6 max-w-lg text-sm font-light leading-8 tracking-japanese text-white/75">
              古い町家の記憶を受け継ぎながら、今の時間を穏やかに過ごすための場所をつくりました。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Architecture</p>
            <h2 className="mt-5 font-serif text-3xl font-normal leading-relaxed tracking-japanese sm:text-4xl">
              残すことから、
              <br />
              空間を考える。
            </h2>
            <div className="mt-8 space-y-5 text-sm font-light leading-8 tracking-japanese text-ink-muted">
              <p>梁や柱、土壁に刻まれた時間を消さず、新しい素材を静かに重ねました。</p>
              <p>内と外をゆるやかにつなぐ町家の知恵を生かし、風や光、季節の気配が巡る空間です。</p>
            </div>
          </Reveal>
          <Reveal className="relative pb-10 pl-8 sm:pb-14 sm:pl-14" delay={0.12}>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                alt="既存の梁や土壁を活かした町家の内装"
                className="h-full w-full object-cover"
                src="/images/machiya-interior.png"
                style={{ objectPosition: "52% 50%" }}
              />
            </div>
            <div className="absolute bottom-0 left-0 -z-10 h-2/3 w-2/3 bg-surface-muted" />
          </Reveal>
        </div>
      </section>

      <section className="bg-moss px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-content">
          <Reveal className="mb-12 max-w-xl">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-[#c9b58f]">Three ideas</p>
            <h2 className="mt-5 font-serif text-3xl tracking-japanese sm:text-4xl">空間をつくる、三つのこと。</h2>
          </Reveal>
          <div className="grid border-t border-white/20 md:grid-cols-3">
            {ideas.map(([number, title, copy], index) => (
              <Reveal
                className="border-b border-white/20 py-9 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                delay={index * 0.1}
                key={title}
              >
                <p className="font-display text-sm text-[#c9b58f]">{number}</p>
                <h3 className="mt-7 font-serif text-2xl tracking-japanese">{title}</h3>
                <p className="mt-5 text-sm font-light leading-8 tracking-japanese text-white/65">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-content">
          <Reveal className="mb-12 text-center">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Seats</p>
            <h2 className="mt-4 font-serif text-3xl tracking-japanese sm:text-4xl">思い思いの居場所</h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-2 md:gap-7">
            {seats.map((seat, index) => (
              <Reveal delay={index * 0.1} key={seat.title}>
                <article>
                  <div className="aspect-[5/4] overflow-hidden">
                    <img
                      alt={seat.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                      src={seat.image}
                      style={{ objectPosition: seat.position }}
                    />
                  </div>
                  <div className="grid gap-4 border-b border-line py-6 sm:grid-cols-[1fr_1.2fr]">
                    <div>
                      <p className="font-display text-xs uppercase tracking-[0.2em] text-gold">{seat.english}</p>
                      <h3 className="mt-2 font-serif text-xl tracking-japanese">{seat.title}</h3>
                    </div>
                    <p className="text-xs font-light leading-7 tracking-japanese text-ink-muted">{seat.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 bg-ink sm:grid-cols-4">
        {[
          ["/images/machiya-interior.png", "20% 50%", "店内の格子戸"],
          ["/images/courtyard-hero.png", "78% 48%", "中庭の緑"],
          ["/images/higashiyama-street.png", "38% 50%", "店へ続く東山の通り"],
          ["/images/machiya-interior.png", "84% 58%", "町家のしつらえ"],
        ].map(([src, position, alt], index) => (
          <Reveal className="aspect-square overflow-hidden" delay={index * 0.06} key={alt}>
            <img alt={alt} className="h-full w-full object-cover" src={src} style={{ objectPosition: position }} />
          </Reveal>
        ))}
      </section>

      <section className="bg-surface-muted px-5 py-20 text-center sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Reservation</p>
          <h2 className="mt-5 font-serif text-3xl font-normal leading-relaxed tracking-japanese sm:text-4xl">
            静かなひとときを、
            <br />
            お取り置きします。
          </h2>
          <p className="mt-6 text-sm font-light leading-8 tracking-japanese text-ink-muted">
            庭を眺める席を中心に、ご予約を承っています。
            <br className="hidden sm:block" />
            当日のご来店も、空席があればご案内いたします。
          </p>
          <Button className="mt-9" to="/reservation">席を予約する</Button>
        </Reveal>
      </section>
    </>
  );
}
