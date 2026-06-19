import { CalendarDays, Check, ChevronDown, Clock3, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { Button, PageHero, Reveal } from "../components";

const seats = ["カウンター", "テーブル", "おまかせ"];
const times = ["10:00", "11:30", "13:00", "14:30", "16:00"];
const faqs = [
  ["予約の変更・キャンセルはできますか？", "前日までにお電話にてご連絡ください。当日のキャンセルは、状況によりキャンセル料をお願いする場合がございます。"],
  ["子ども連れでも利用できますか？", "はい。小さなお子さま用の椅子は数に限りがございますので、ご予約時に備考欄へご記入ください。"],
  ["予約なしでも入店できますか？", "当日席もご用意しています。満席時はお待ちいただく場合があるため、週末は事前予約がおすすめです。"],
];

function formatDate(date) {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

export default function ReservationPage() {
  const today = useMemo(() => new Date(), []);
  const [monthOffset, setMonthOffset] = useState(0);
  const [date, setDate] = useState(null);
  const [people, setPeople] = useState(2);
  const [seat, setSeat] = useState("おまかせ");
  const [time, setTime] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const month = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const firstDay = month.getDay();
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = [...Array(firstDay).fill(null), ...Array.from({ length: days }, (_, index) => index + 1)];

  const selectDay = (day) => {
    const next = new Date(month.getFullYear(), month.getMonth(), day);
    if (next >= new Date(today.getFullYear(), today.getMonth(), today.getDate())) setDate(next);
  };

  return (
    <>
      <PageHero
        description="お好みの日と席を選び、静かなひとときをお取り置きください。ご予約は2か月先まで承ります。"
        eyebrow="Reservation"
        image="/images/courtyard-hero.png"
        imageAlt="柔らかな光が差し込む余白珈琲の中庭"
        imagePosition="center"
        title="席の予約"
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-content gap-12 xl:grid-cols-[1fr_360px] xl:items-start">
          <div className="space-y-14">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-display text-lg text-gold">01</span>
                <h2 className="font-serif text-2xl tracking-japanese">日付を選ぶ</h2>
              </div>
              <div className="mt-7 border border-line bg-surface p-4 sm:p-7">
                <div className="flex items-center justify-between">
                  <button
                    aria-label="前の月"
                    className="min-h-11 px-4 text-lg disabled:opacity-30"
                    disabled={monthOffset === 0}
                    onClick={() => setMonthOffset((value) => value - 1)}
                    type="button"
                  >
                    ←
                  </button>
                  <p className="font-serif text-lg tracking-japanese">
                    {month.getFullYear()}年 {month.getMonth() + 1}月
                  </p>
                  <button
                    aria-label="次の月"
                    className="min-h-11 px-4 text-lg disabled:opacity-30"
                    disabled={monthOffset === 2}
                    onClick={() => setMonthOffset((value) => value + 1)}
                    type="button"
                  >
                    →
                  </button>
                </div>
                <div className="mt-5 grid grid-cols-7 text-center text-xs text-ink-muted">
                  {"日月火水木金土".split("").map((day) => <span className="py-2" key={day}>{day}</span>)}
                  {cells.map((day, index) => {
                    const candidate = day && new Date(month.getFullYear(), month.getMonth(), day);
                    const past = candidate && candidate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                    const selected = candidate && date?.toDateString() === candidate.toDateString();
                    return day ? (
                      <button
                        aria-label={`${month.getMonth() + 1}月${day}日`}
                        aria-pressed={selected}
                        className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full text-sm transition-colors ${
                          selected ? "bg-moss text-white" : past ? "cursor-not-allowed text-ink-muted/30" : "hover:bg-surface-muted"
                        }`}
                        disabled={past}
                        key={`${day}-${index}`}
                        onClick={() => selectDay(day)}
                        type="button"
                      >
                        {day}
                      </button>
                    ) : <span key={`blank-${index}`} />;
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-display text-lg text-gold">02</span>
                <h2 className="font-serif text-2xl tracking-japanese">人数と席を選ぶ</h2>
              </div>
              <div className="mt-7 grid gap-8 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm tracking-japanese">ご利用人数</span>
                  <select
                    className="mt-3 min-h-12 w-full appearance-none border border-line bg-surface px-4 text-sm outline-none focus:border-gold"
                    onChange={(event) => setPeople(Number(event.target.value))}
                    value={people}
                  >
                    {[1, 2, 3, 4, 5, 6].map((count) => <option key={count} value={count}>{count}名</option>)}
                  </select>
                </label>
                <fieldset>
                  <legend className="text-sm tracking-japanese">席のご希望</legend>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {seats.map((item) => (
                      <button
                        aria-pressed={seat === item}
                        className={`min-h-12 border px-2 text-xs tracking-japanese transition-colors ${
                          seat === item ? "border-moss bg-moss text-white" : "border-line bg-surface hover:border-moss"
                        }`}
                        key={item}
                        onClick={() => setSeat(item)}
                        type="button"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-display text-lg text-gold">03</span>
                <h2 className="font-serif text-2xl tracking-japanese">時間を選ぶ</h2>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {times.map((item) => (
                  <button
                    aria-pressed={time === item}
                    className={`min-h-12 border text-sm transition-colors ${
                      time === item ? "border-moss bg-moss text-white" : "border-line bg-surface hover:border-moss"
                    }`}
                    key={item}
                    onClick={() => setTime(item)}
                    type="button"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="border border-line bg-surface p-7 xl:sticky xl:top-32" delay={0.15}>
            <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">Your Reservation</p>
            <h2 className="mt-3 font-serif text-2xl tracking-japanese">予約内容</h2>
            <dl className="mt-7 divide-y divide-line border-y border-line">
              {[
                [CalendarDays, "日付", date ? formatDate(date) : "未選択"],
                [Users, "人数・席", `${people}名 / ${seat}`],
                [Clock3, "時間", time || "未選択"],
              ].map(([Icon, label, value]) => (
                <div className="grid grid-cols-[24px_5rem_1fr] gap-2 py-5 text-sm" key={label}>
                  <Icon aria-hidden="true" className="h-4 w-4 text-gold" />
                  <dt className="text-ink-muted">{label}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
            <Button
              aria-disabled={!date || !time}
              className={`mt-7 w-full ${!date || !time ? "pointer-events-none opacity-40" : ""}`}
              showArrow={false}
            >
              <Check aria-hidden="true" className="h-4 w-4" />
              予約情報を入力する
            </Button>
            <p className="mt-4 text-xs font-light leading-6 text-ink-muted">
              次の画面でお名前とご連絡先をご入力いただきます。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-muted px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">FAQ</p>
            <h2 className="mt-4 font-serif text-3xl tracking-japanese">ご予約について</h2>
          </Reveal>
          <div className="mt-10 border-t border-line">
            {faqs.map(([question, answer], index) => {
              const open = openFaq === index;
              return (
                <Reveal className="border-b border-line" key={question}>
                  <button
                    aria-expanded={open}
                    className="flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left"
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    type="button"
                  >
                    <span className="font-serif text-base leading-7 tracking-japanese">{question}</span>
                    <ChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                    <p className="overflow-hidden text-sm font-light leading-8 tracking-japanese text-ink-muted">{answer}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
