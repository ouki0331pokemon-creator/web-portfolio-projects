import {
  Bike,
  Clock3,
  MapPin,
  Navigation,
  Phone,
  Train,
} from "lucide-react";
import { Button, PageHero, Reveal } from "../components";

const details = [
  { label: "住所", value: "〒605-0826\n京都府京都市東山区桝屋町 〇〇-〇", icon: MapPin },
  { label: "営業時間", value: "10:00 - 18:00\nラストオーダー 17:30", icon: Clock3 },
  { label: "電話番号", value: "075-000-0000", icon: Phone },
];

const routes = [
  {
    title: "電車でお越しの方",
    text: "京阪本線「祇園四条駅」6番出口より徒歩約15分。八坂神社を抜け、二寧坂方面へお進みください。",
    icon: Train,
  },
  {
    title: "自転車でお越しの方",
    text: "店舗脇に小さな駐輪スペースがございます。満車の場合は近隣の公共駐輪場をご利用ください。",
    icon: Bike,
  },
  {
    title: "お車でお越しの方",
    text: "専用駐車場はございません。東山安井周辺のコインパーキングをご利用ください。",
    icon: Navigation,
  },
];

export default function AccessPage() {
  return (
    <>
      <PageHero
        description="古い町並みのなか、暖簾を目印にお越しください。店までの道のりも、どうぞゆっくりと。"
        eyebrow="Access"
        image="/images/higashiyama-street.png"
        imageAlt="余白珈琲へ続く京都・東山の町並み"
        imagePosition="center"
        title="店舗案内・アクセス"
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
          <Reveal className="overflow-hidden">
            <img
              alt="京都・東山の町並み"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              src="/images/higashiyama-street.png"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Shop Information</p>
            <h2 className="mt-5 font-serif text-3xl leading-relaxed tracking-japanese sm:text-4xl">
              東山の静かな路地に、
              <br />
              余白珈琲はあります。
            </h2>
            <div className="mt-9 divide-y divide-line border-y border-line">
              {details.map(({ icon: Icon, label, value }) => (
                <div className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr]" key={label}>
                  <p className="flex items-center gap-3 text-xs tracking-[0.14em] text-ink-muted">
                    <Icon aria-hidden="true" className="h-4 w-4 text-gold" />
                    {label}
                  </p>
                  <p className="whitespace-pre-line text-sm font-light leading-7 tracking-japanese">{value}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 tracking-japanese text-ink-muted">
              定休日：水曜日（祝日の場合は翌木曜日）
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-muted px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-content">
          <Reveal className="text-center">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Map</p>
            <h2 className="mt-4 font-serif text-3xl tracking-japanese">店舗周辺地図</h2>
          </Reveal>
          <Reveal className="relative mt-10 min-h-[420px] overflow-hidden border border-line bg-[#e5e0d4] sm:min-h-[520px]">
            <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(28deg,transparent_48%,#c2b9a7_49%,#c2b9a7_51%,transparent_52%),linear-gradient(95deg,transparent_47%,#c2b9a7_48%,#c2b9a7_50%,transparent_51%)] [background-size:170px_140px,210px_180px]" />
            <div className="absolute left-[12%] top-0 h-full w-16 rotate-12 bg-canvas/80 sm:w-24" />
            <div className="absolute left-0 top-[62%] h-14 w-full -rotate-3 bg-canvas/90 sm:h-20" />
            <span className="absolute left-[12%] top-[20%] text-xs tracking-japanese text-ink-muted">八坂神社</span>
            <span className="absolute bottom-[18%] right-[12%] text-xs tracking-japanese text-ink-muted">二寧坂</span>
            <span className="absolute right-[14%] top-[16%] text-xs tracking-japanese text-ink-muted">高台寺</span>
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-moss text-white shadow-lg">
                <MapPin aria-hidden="true" className="h-6 w-6" />
              </div>
              <span className="mt-3 bg-canvas px-4 py-2 font-serif text-sm tracking-japanese shadow-sm">余白珈琲</span>
            </div>
          </Reveal>
          <div className="mt-8 flex justify-center">
            <Button
              href="https://maps.google.com/?q=京都市東山区桝屋町"
              rel="noreferrer"
              target="_blank"
            >
              Google Mapsで見る
            </Button>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Directions</p>
            <h2 className="mt-4 font-serif text-3xl tracking-japanese">店までの道のり</h2>
          </Reveal>
          <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
            {routes.map(({ icon: Icon, text, title }, index) => (
              <Reveal className="bg-canvas p-7 sm:p-9" delay={index * 0.08} key={title}>
                <Icon aria-hidden="true" className="h-6 w-6 text-gold" strokeWidth={1.5} />
                <h3 className="mt-7 font-serif text-xl tracking-japanese">{title}</h3>
                <p className="mt-4 text-sm font-light leading-8 tracking-japanese text-ink-muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        {[
          ["/images/machiya-interior.png", "町家を改装した店内"],
          ["/images/courtyard-hero.png", "光が差し込む中庭"],
        ].map(([src, alt]) => (
          <Reveal className="overflow-hidden" distance={12} key={src}>
            <img alt={alt} className="aspect-[4/3] w-full object-cover md:aspect-[16/11]" src={src} />
          </Reveal>
        ))}
      </section>

      <section className="bg-moss px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <Reveal className="mx-auto flex max-w-content flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Before Your Visit</p>
            <h2 className="mt-4 font-serif text-3xl leading-relaxed tracking-japanese">ご来店前のご案内</h2>
            <p className="mt-4 max-w-2xl text-sm font-light leading-8 tracking-japanese text-white/70">
              席数に限りがございます。週末や祝日は、事前のご予約がおすすめです。
            </p>
          </div>
          <Button className="shrink-0" to="/reservation" variant="light">
            席を予約する
          </Button>
        </Reveal>
      </section>
    </>
  );
}
