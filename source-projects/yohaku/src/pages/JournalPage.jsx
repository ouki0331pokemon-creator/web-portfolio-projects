import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHero, Reveal } from "../components";

const categories = ["すべて", "珈琲のこと", "季節のこと", "店のこと"];

const articles = [
  {
    category: "季節のこと",
    date: "2026.05.28",
    title: "青梅のころ、窓辺で味わう水出し珈琲",
    excerpt: "少しずつ湿り気を帯びる京都の午後に、涼やかな一杯をご用意しました。",
    image: "/images/courtyard-hero.png",
    position: "center 62%",
  },
  {
    category: "珈琲のこと",
    date: "2026.05.12",
    title: "一杯の輪郭をつくる、湯の温度",
    excerpt: "同じ豆でも表情を変える湯温。店で大切にしている抽出の話を少しだけ。",
    image: "/images/coffee-wagashi.png",
    position: "center 42%",
  },
  {
    category: "店のこと",
    date: "2026.04.24",
    title: "朝の町家、開店までの静かな時間",
    excerpt: "暖簾を出す前の店内で、私たちが毎朝整えているものについて。",
    image: "/images/machiya-interior.png",
    position: "center 52%",
  },
  {
    category: "季節のこと",
    date: "2026.04.08",
    title: "桜の余韻と、白餡の小さな甘味",
    excerpt: "花の季節を見送るころに生まれた、淡い色合いの季節菓子です。",
    image: "/images/coffee-wagashi.png",
    position: "left 72%",
  },
  {
    category: "珈琲のこと",
    date: "2026.03.19",
    title: "春のブレンド「霞」をつくるまで",
    excerpt: "柔らかな香りと、軽やかに続く甘み。春だけの味わいができるまで。",
    image: "/images/store-products.png",
    position: "center 44%",
  },
  {
    category: "店のこと",
    date: "2026.03.02",
    title: "東山を歩く、店までの寄り道",
    excerpt: "石畳や小さな路地を抜けて。余白珈琲までの好きな道をご紹介します。",
    image: "/images/higashiyama-street.png",
    position: "center 58%",
  },
];

function Newsletter() {
  return (
    <section className="bg-moss px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
      <Reveal className="mx-auto grid max-w-content gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-end">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.28em] text-white/60">Newsletter</p>
          <h2 className="mt-4 font-serif text-2xl leading-relaxed tracking-japanese sm:text-3xl">季節の便りを、メールで。</h2>
          <p className="mt-4 max-w-lg text-sm font-light leading-7 tracking-japanese text-white/65">
            新しい豆や甘味、店の小さな出来事を月に一度ほどお届けします。
          </p>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="journal-email">メールアドレス</label>
          <input
            className="min-h-12 flex-1 border border-white/30 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/45 focus:border-white"
            id="journal-email"
            placeholder="メールアドレス"
            type="email"
          />
          <button className="group min-h-12 border border-white bg-white px-7 text-xs tracking-[0.18em] text-moss transition-colors hover:bg-transparent hover:text-white" type="submit">
            登録する <ArrowRight className="ml-3 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </Reveal>
    </section>
  );
}

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("すべて");
  const [page, setPage] = useState(1);
  const filteredArticles = useMemo(
    () => activeCategory === "すべて" ? articles : articles.filter((article) => article.category === activeCategory),
    [activeCategory],
  );

  const selectCategory = (category) => {
    setActiveCategory(category);
    setPage(1);
  };

  return (
    <>
      <PageHero
        description="珈琲のこと、季節のこと、この場所で重なる日々のこと。余白珈琲から、小さなお便りを綴ります。"
        eyebrow="Journal"
        image="/images/courtyard-hero.png"
        imageAlt="緑の庭を望む余白珈琲の縁側"
        imagePosition="center 58%"
        title="季節のお便り"
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-content">
          <Reveal className="grid overflow-hidden bg-surface lg:grid-cols-[1.35fr_1fr]">
            <div className="group overflow-hidden">
              <img className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:min-h-[520px]" src="/images/courtyard-hero.png" alt="緑の庭を望む余白珈琲の縁側" />
            </div>
            <div className="flex flex-col justify-center px-7 py-10 sm:px-12 lg:px-14">
              <p className="font-display text-xs uppercase tracking-[0.24em] text-gold">Featured Story</p>
              <p className="mt-8 text-xs tracking-[0.15em] text-ink-muted">2026.06.01　季節のこと</p>
              <h2 className="mt-5 font-serif text-2xl leading-[1.75] tracking-japanese sm:text-3xl">雨音と珈琲。<br />梅雨の庭を眺める時間</h2>
              <p className="mt-6 text-sm font-light leading-8 tracking-japanese text-ink-muted">
                雨に濡れた苔の色、土の匂い、静かに立つ湯気。季節がゆっくりと移ろう店の一日をお届けします。
              </p>
              <a className="group/link mt-9 inline-flex w-fit items-center gap-4 border-b border-ink pb-2 text-xs tracking-[0.16em]" href="#articles">
                読み進める <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-8 lg:px-12 lg:py-24" id="articles">
        <div className="mx-auto max-w-content">
          <Reveal className="flex flex-col gap-7 border-b border-line pb-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Stories</p>
              <h2 className="mt-3 font-serif text-2xl tracking-japanese sm:text-3xl">新しいお便り</h2>
            </div>
            <div aria-label="記事カテゴリ" className="flex flex-wrap gap-x-6 gap-y-3">
              {categories.map((category) => (
                <button
                  className={`min-h-11 border-b text-xs tracking-[0.12em] transition-colors ${activeCategory === category ? "border-moss text-moss" : "border-transparent text-ink-muted hover:border-line hover:text-ink"}`}
                  key={category}
                  onClick={() => selectCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, index) => (
              <Reveal delay={index * 0.05} key={article.title}>
                <article className="group">
                  <div className="aspect-[4/3] overflow-hidden bg-surface-muted">
                    <img
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={article.image}
                      style={{ objectPosition: article.position }}
                    />
                  </div>
                  <p className="mt-5 text-[10px] tracking-[0.16em] text-ink-muted">{article.date}　{article.category}</p>
                  <h3 className="mt-3 font-serif text-lg leading-8 tracking-japanese transition-colors group-hover:text-gold">{article.title}</h3>
                  <p className="mt-3 text-xs font-light leading-7 tracking-japanese text-ink-muted">{article.excerpt}</p>
                  <a aria-label={`${article.title}を読む`} className="mt-5 inline-flex items-center gap-3 text-xs tracking-[0.14em]" href="#journal-email">
                    続きを読む <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 flex items-center justify-center gap-2">
            <button aria-label="前のページ" className="flex h-11 w-11 items-center justify-center border border-line transition-colors hover:border-moss hover:bg-moss hover:text-white" onClick={() => setPage(Math.max(1, page - 1))} type="button"><ChevronLeft className="h-4 w-4" /></button>
            {[1, 2, 3].map((number) => (
              <button className={`h-11 w-11 border text-xs transition-colors ${page === number ? "border-moss bg-moss text-white" : "border-line hover:border-moss"}`} key={number} onClick={() => setPage(number)} type="button">{number}</button>
            ))}
            <button aria-label="次のページ" className="flex h-11 w-11 items-center justify-center border border-line transition-colors hover:border-moss hover:bg-moss hover:text-white" onClick={() => setPage(Math.min(3, page + 1))} type="button"><ChevronRight className="h-4 w-4" /></button>
          </Reveal>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
