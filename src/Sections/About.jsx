import { motion } from "motion/react";
import SectionHeader from "../components/SectionHeader";
import Window from "../components/Window";
import { FACTS, PASSIONS, WORK } from "../data/profile";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function About() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <SectionHeader index={2} label="About" title="About Me">
        Who I am, what I do for work, and what keeps me building after hours.
      </SectionHeader>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* ID card */}
        <motion.div {...reveal()}>
          <Window title="profile.img" meta="1/1" bodyClassName="p-0">
            <div className="relative overflow-hidden border-b-2 border-line">
              <img
                src="me.png"
                alt="Portrait of Ryan Woo"
                className="aspect-square w-full object-cover grayscale-[60%] contrast-[1.05] transition-[filter] duration-500 hover:grayscale-0"
              />
              {/* scan overlay on the photo */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0_2px,rgba(0,0,0,0.12)_2px_3px)] mix-blend-multiply"
              />
              <span className="absolute left-3 top-3 bg-accent px-2 py-0.5 font-mono text-[0.65rem] font-bold tracking-[0.2em] text-accent-ink">
                ● ONLINE
              </span>
            </div>
            <dl className="grid grid-cols-2">
              {FACTS.map((f, i) => (
                <div
                  key={f.label}
                  className={`p-4 border-line ${i % 2 ? "border-l-2" : ""} ${i > 1 ? "border-t-2" : ""}`}
                >
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-snug">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Window>
        </motion.div>

        <div className="flex flex-col gap-8">
          {/* bio */}
          <motion.div {...reveal(0.1)}>
            <Window title="whoami.txt">
              <p className="font-mono text-sm text-accent-2 mb-3">$ whoami</p>
              <p className="text-lg leading-relaxed">
                Hey there! I'm <span className="font-semibold">Ryan Woo</span>, a
                software developer who traded the hustle of New York for the tech
                scene of San Francisco. I love building impactful applications and
                seamless user experiences, with a focus on front-end development
                (though I'm no stranger to the back end either).
              </p>
            </Window>
          </motion.div>

          {/* work */}
          <motion.div {...reveal(0.2)}>
            <Window title="work.log" meta="current">
              <p className="font-mono text-sm text-accent-2 mb-3">$ cat ./line-of-work</p>
              <h3 className="text-2xl font-bold leading-tight">
                {WORK.role} <span className="text-accent glow-text">@ {WORK.org}</span>
              </h3>
              <p className="mt-3 text-ink-muted">{WORK.summary}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {WORK.duties.map((d) => (
                  <li
                    key={d}
                    className="flex gap-3 border-2 border-line-soft bg-bg/60 p-3 text-sm leading-snug"
                  >
                    <span className="font-mono text-accent" aria-hidden="true">
                      ▸
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </Window>
          </motion.div>
        </div>
      </div>

      {/* hobbies & passions */}
      <div className="mt-16">
        <motion.div {...reveal()} className="mb-6 flex items-end justify-between gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Hobbies <span className="text-ink-muted font-normal">&amp;</span> Passions
          </h3>
          <span className="hidden sm:block font-mono text-xs tracking-[0.2em] text-ink-muted">
            {String(PASSIONS.length).padStart(2, "0")} PROCESSES RUNNING
          </span>
        </motion.div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PASSIONS.map((p, i) => (
            <motion.li
              key={p.title}
              {...reveal(i * 0.08)}
              className="window group p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center border-2 border-line bg-bg font-pixel text-3xl text-accent glow-text transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                  {p.glyph}
                </span>
                <span className="font-mono text-[0.65rem] tracking-[0.2em] text-ink-muted">
                  PID_{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="text-lg font-bold">{p.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
