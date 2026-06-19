import { Clock3, Mail, MessageCircle, Package, Phone } from "lucide-react";
import { Button, PageHero, Reveal } from "../components";

const contactTypes = [
  { icon: MessageCircle, title: "店舗について", text: "営業時間、席、ご来店に関するご質問" },
  { icon: Package, title: "オンラインストア", text: "商品、配送、ご注文内容に関するご相談" },
  { icon: Mail, title: "取材・お取り組み", text: "取材、卸売、協業についてのお問い合わせ" },
];

const fieldClass = "mt-3 min-h-12 w-full border border-line bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink-muted/50 focus:border-gold";

export default function ContactPage() {
  return (
    <>
      <PageHero
        description="ご質問やご相談がございましたら、下記フォームよりお寄せください。内容を確認のうえ、順次ご連絡いたします。"
        eyebrow="Contact"
        image="/images/coffee-wagashi.png"
        imageAlt="余白珈琲の珈琲と季節の和菓子"
        imagePosition="center"
        title="お問い合わせ"
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-content gap-px bg-line md:grid-cols-3">
          {contactTypes.map(({ icon: Icon, text, title }, index) => (
            <Reveal className="bg-canvas p-7 text-center sm:p-9" delay={index * 0.08} key={title}>
              <Icon aria-hidden="true" className="mx-auto h-7 w-7 text-gold" strokeWidth={1.5} />
              <h2 className="mt-6 font-serif text-xl tracking-japanese">{title}</h2>
              <p className="mt-3 text-sm font-light leading-7 tracking-japanese text-ink-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-content gap-14 lg:grid-cols-[1fr_340px] lg:gap-24">
          <Reveal>
            <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Inquiry Form</p>
            <h2 className="mt-4 font-serif text-3xl tracking-japanese">フォームでのお問い合わせ</h2>
            <p className="mt-5 text-sm font-light leading-8 tracking-japanese text-ink-muted">
              <span className="text-gold">＊</span> は必須項目です。
            </p>
            <form className="mt-9 grid gap-7" onSubmit={(event) => event.preventDefault()}>
              <label>
                <span className="text-sm tracking-japanese">お問い合わせ種別 <span aria-hidden="true" className="text-gold">＊</span></span>
                <select className={fieldClass} defaultValue="" required>
                  <option disabled value="">選択してください</option>
                  <option>店舗について</option>
                  <option>オンラインストアについて</option>
                  <option>取材・お取り組みについて</option>
                  <option>その他</option>
                </select>
              </label>
              <div className="grid gap-7 sm:grid-cols-2">
                <label>
                  <span className="text-sm tracking-japanese">お名前 <span aria-hidden="true" className="text-gold">＊</span></span>
                  <input autoComplete="name" className={fieldClass} name="name" placeholder="余白 花子" required type="text" />
                </label>
                <label>
                  <span className="text-sm tracking-japanese">ふりがな <span aria-hidden="true" className="text-gold">＊</span></span>
                  <input className={fieldClass} name="name-kana" placeholder="よはく はなこ" required type="text" />
                </label>
              </div>
              <label>
                <span className="text-sm tracking-japanese">メールアドレス <span aria-hidden="true" className="text-gold">＊</span></span>
                <input autoComplete="email" className={fieldClass} name="email" placeholder="hello@example.com" required type="email" />
              </label>
              <label>
                <span className="text-sm tracking-japanese">電話番号</span>
                <input autoComplete="tel" className={fieldClass} inputMode="tel" name="tel" placeholder="090-0000-0000" type="tel" />
              </label>
              <label>
                <span className="text-sm tracking-japanese">お問い合わせ内容 <span aria-hidden="true" className="text-gold">＊</span></span>
                <textarea className={`${fieldClass} min-h-48 resize-y`} name="message" placeholder="お問い合わせ内容をご記入ください。" required />
              </label>
              <label className="flex cursor-pointer items-start gap-3 text-sm leading-7 text-ink-muted">
                <input className="mt-1.5 h-4 w-4 accent-moss" required type="checkbox" />
                <span>個人情報の取り扱いに同意します。</span>
              </label>
              <div>
                <Button className="w-full sm:w-auto" type="submit">入力内容を確認する</Button>
              </div>
            </form>
          </Reveal>

          <aside>
            <Reveal className="border border-line bg-surface p-7 sm:p-9">
              <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">Contact Info</p>
              <h2 className="mt-3 font-serif text-2xl tracking-japanese">お急ぎの方へ</h2>
              <p className="mt-5 text-sm font-light leading-8 tracking-japanese text-ink-muted">
                当日のご予約や変更は、お電話にてお問い合わせください。
              </p>
              <a className="mt-7 flex items-center gap-3 border-y border-line py-5 font-display text-2xl tracking-wide transition-colors hover:text-gold" href="tel:0750000000">
                <Phone aria-hidden="true" className="h-5 w-5 text-gold" />
                075-000-0000
              </a>
              <p className="mt-5 flex items-start gap-3 text-xs leading-6 text-ink-muted">
                <Clock3 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                電話受付 10:00 - 17:30
                <br />
                水曜定休
              </p>
            </Reveal>

            <Reveal className="mt-7 bg-moss p-7 text-white sm:p-9" delay={0.1}>
              <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">Visit & Reserve</p>
              <h2 className="mt-3 font-serif text-2xl tracking-japanese">ご来店をご検討の方へ</h2>
              <p className="mt-4 text-sm font-light leading-7 tracking-japanese text-white/70">
                店舗へのアクセス確認や、席のご予約はこちらから。
              </p>
              <div className="mt-7 grid gap-3">
                <Button to="/access" variant="light">店舗案内を見る</Button>
                <Button to="/reservation" variant="light">席を予約する</Button>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
