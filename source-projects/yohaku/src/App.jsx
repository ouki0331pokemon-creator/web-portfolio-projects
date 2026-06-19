import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header } from "./components";
import AboutPage from "./pages/AboutPage";
import AccessPage from "./pages/AccessPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import JournalPage from "./pages/JournalPage";
import MenuPage from "./pages/MenuPage";
import ReservationPage from "./pages/ReservationPage";
import SpacePage from "./pages/SpacePage";
import StorePage from "./pages/StorePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.main
          animate={{ opacity: 1, y: 0 }}
          className="flex-1"
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          key={location.pathname}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Routes location={location}>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<MenuPage />} path="/menu" />
            <Route element={<SpacePage />} path="/space" />
            <Route element={<JournalPage />} path="/journal" />
            <Route element={<StorePage />} path="/store" />
            <Route element={<AccessPage />} path="/access" />
            <Route element={<ReservationPage />} path="/reservation" />
            <Route element={<ContactPage />} path="/contact" />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
