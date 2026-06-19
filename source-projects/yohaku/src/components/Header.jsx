import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./Button";

export const navigation = [
  { label: "私たちについて", to: "/about" },
  { label: "珈琲と甘味", to: "/menu" },
  { label: "空間", to: "/space" },
  { label: "季節のお便り", to: "/journal" },
  { label: "オンラインストア", to: "/store" },
  { label: "店舗案内", to: "/access" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setVisible(true);
    lastScrollY.current = window.scrollY;
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollY.current;

      if (open || currentScrollY < 24) {
        setVisible(true);
      } else if (Math.abs(delta) > 6) {
        setVisible(delta < 0);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12">
        <NavLink aria-label="余白珈琲 ホーム" className="relative z-50 font-serif text-xl tracking-[0.24em]" to="/">
          余白珈琲
        </NavLink>
        <nav aria-label="メインナビゲーション" className="hidden items-center gap-6 xl:flex">
          {navigation.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `relative py-2 text-xs tracking-[0.1em] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-gold after:transition-transform ${
                  isActive ? "text-ink after:scale-x-100" : "text-ink-muted after:scale-x-0 hover:text-ink hover:after:scale-x-100"
                }`
              }
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
          <Button className="ml-1 px-5" to="/reservation">席の予約</Button>
        </nav>
        <button
          aria-expanded={open}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          className="relative z-50 flex h-11 w-11 items-center justify-center xl:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div
        className={`absolute inset-x-0 top-full h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-canvas px-7 pb-10 pt-5 transition-all duration-300 xl:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="モバイルナビゲーション" className="flex h-full flex-col">
          {[{ label: "ホーム", to: "/" }, ...navigation].map((item, index) => (
            <NavLink
              className="border-b border-line py-4 font-serif text-lg tracking-japanese"
              key={item.to}
              style={{ transitionDelay: open ? `${index * 35}ms` : "0ms" }}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-auto grid gap-3 pt-8">
            <Button to="/reservation">席の予約</Button>
            <Button to="/contact" variant="outline">お問い合わせ</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
