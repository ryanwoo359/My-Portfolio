import { motion, useReducedMotion } from "motion/react";
import { LINKS } from "../data/profile";

const bootLines = [
  "> initializing ryan_woo.sys",
  "> loading modules: react · node · sql ........ OK",
  "> location: san_francisco_ca ................. OK",
  "> status: online — accepting new connections",
];

const stats = [
  { k: "ROLE", v: "Software Dev" },
  { k: "BASE", v: "SF, CA" },
  { k: "STACK", v: "Full Stack" },
  { k: "MODE", v: "Building" },
];

export default function Home() {
  const reduce = useReducedMotion();
  const line = (i) => ({
    initial: { opacity: 0, x: -8 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: reduce ? 0 : 0.25 + i * 0.35, duration: 0.25 },
  });
  const afterBoot = 0.25 + bootLines.length * 0.35;

  return (
    <div className="relative isolate flex min-h-dvh w-full items-center overflow-hidden bg-grid">
      {/* futuristic horizon */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="retro-sun absolute left-[60%] md:left-[78%] top-[62%] h-[min(70vw,460px)] w-[min(70vw,460px)] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-bg via-bg/80 to-transparent" />
        <div className="grid-floor" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 pt-28 pb-20">
        {/* boot console */}
        <div className="mb-10 max-w-xl font-mono text-[0.78rem] sm:text-sm leading-relaxed text-ink-muted">
          {bootLines.map((l, i) => (
            <motion.p key={l} {...line(i)} className={i === bootLines.length - 1 ? "text-accent-2" : ""}>
              {l}
            </motion.p>
          ))}
        </div>

        <motion.p
          className="hud mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : afterBoot }}
        >
          {"// 01 — Welcome"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : afterBoot + 0.1, duration: 0.6, ease: "easeOut" }}
          className="font-sans font-bold leading-[0.95] tracking-tight"
        >
          <span className="block font-pixel text-[clamp(1.8rem,4.5vw,3rem)] font-normal tracking-normal text-ink-muted">
            Welcome to
          </span>
          <span
            className="glitch block text-[clamp(3rem,11vw,8.5rem)]"
            data-text="MY PORTFOLIO"
          >
            MY PORTFOLIO
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : afterBoot + 0.3, duration: 0.5 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-ink-muted"
        >
          I'm <span className="font-semibold text-ink">Ryan Woo</span>, a software
          developer building <span className="text-accent glow-text">impactful applications</span> and
          seamless user experiences, from New York to San Francisco.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : afterBoot + 0.45, duration: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#about" className="btn btn-primary">
            Explore <span aria-hidden="true">↓</span>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
          <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Resume ↗
          </a>
        </motion.div>

        {/* status strip */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : afterBoot + 0.7, duration: 0.6 }}
          className="window mt-16 grid max-w-3xl grid-cols-2 sm:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.k}
              className={`px-4 py-3 border-line ${i % 2 ? "border-l-2" : ""} ${i > 1 ? "border-t-2 sm:border-t-0" : ""} ${i === 2 ? "sm:border-l-2" : ""}`}
            >
              <dt className="font-mono text-[0.65rem] tracking-[0.2em] text-ink-muted">{s.k}</dt>
              <dd className="font-mono text-sm font-bold">{s.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] tracking-[0.3em] text-ink-muted hover:text-accent"
      >
        <motion.span
          className="block"
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          SCROLL ▼
        </motion.span>
      </a>
    </div>
  );
}
