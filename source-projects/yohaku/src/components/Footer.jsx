import { Link } from "react-router-dom";
import { navigation } from "./Header";

export default function Footer() {
  return (
    <footer className="bg-moss px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <Link className="font-serif text-2xl tracking-[0.24em]" to="/">余白珈琲</Link>
          <p className="mt-5 text-xs font-light leading-6 tracking-japanese text-white/65">
            〒605-0828<br />
            京都市東山区下河原町478-2<br />
            営業時間 10:00–18:00　水曜定休
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
          {navigation.map((item) => (
            <Link className="text-xs tracking-[0.1em] text-white/75 transition-colors hover:text-white" key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
          <Link className="text-xs tracking-[0.1em] text-white/75 hover:text-white" to="/reservation">席の予約</Link>
          <Link className="text-xs tracking-[0.1em] text-white/75 hover:text-white" to="/contact">お問い合わせ</Link>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-content flex-col gap-3 border-t border-white/20 pt-6 text-[10px] tracking-[0.12em] text-white/50 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} YOHAKU COFFEE</p>
        <p>静かな一杯を、日々のなかに。</p>
      </div>
    </footer>
  );
}
