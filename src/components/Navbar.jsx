import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import { LINKS, NAV_ITEMS } from "../data/profile";

export default function Navbar() {
  const [active, setActive] = useState("welcome");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highlight whichever section is crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-[background-color,border-color] duration-300 border-b-2 ${
        scrolled || menuOpen
          ? "bg-surface/90 backdrop-blur-md border-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#welcome"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 font-mono font-bold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center border-2 border-line bg-accent text-accent-ink text-xs">
            RW
          </span>
          <span className="cursor hidden sm:inline">ryan_woo</span>
        </a>

        <div className="flex items-center gap-2 md:gap-6">
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, i) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                      isActive ? "text-accent glow-text" : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    <span className="opacity-60">0{i + 1}.</span>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-px h-[2px] bg-accent shadow-[var(--glow)]"
                      />
                    )}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 block border-2 border-line px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] hover:bg-accent hover:text-accent-ink hover:border-accent transition-colors"
              >
                Resume ↗
              </a>
            </li>
          </ul>

          <ThemeToggle />

          <button
            type="button"
            className="md:hidden grid h-9 w-9 place-items-center border-2 border-line bg-bg"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="font-mono text-sm font-bold">{menuOpen ? "✕" : "≡"}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-bg bg-grid border-t-2 border-line px-6 py-10"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <p className="hud mb-6">&gt; select destination_</p>
            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`window flex items-center justify-between px-5 py-4 font-mono uppercase tracking-[0.12em] ${
                      active === item.id ? "text-accent" : ""
                    }`}
                  >
                    <span>
                      <span className="text-ink-muted mr-3">0{i + 1}</span>
                      {item.label}
                    </span>
                    <span aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center mt-4"
                >
                  Resume ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
