import { motion } from "motion/react";
import SectionHeader from "../components/SectionHeader";
import Window from "../components/Window";
import { SKILLS } from "../data/profile";

function SkillTile({ item }) {
  return (
    <li className="group relative flex flex-col items-center gap-3 border-2 border-line-soft bg-bg/60 px-3 py-5 transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-accent">
      {item.icon ? (
        <img
          src={item.icon}
          alt=""
          className={`h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-110 ${
            item.invertDark ? "invert-dark" : ""
          }`}
        />
      ) : (
        <span className="grid h-10 w-10 place-items-center border-2 border-line font-mono text-sm font-bold text-accent">
          {item.mono}
        </span>
      )}
      <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-center">
        {item.name}
      </span>
      {item.note && (
        <span className="absolute right-1.5 top-1.5 bg-accent-2 px-1.5 font-mono text-[0.55rem] font-bold uppercase tracking-wider text-bg">
          {item.note}
        </span>
      )}
    </li>
  );
}

export default function Skills() {
  const total = SKILLS.reduce((n, s) => n + s.items.length, 0);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <SectionHeader index={3} label="Skills" title="Tech Stack">
        {total} technologies I work with, sorted by the layer of the stack they live in.
      </SectionHeader>

      <div className="grid gap-6 md:grid-cols-2">
        {SKILLS.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1, ease: "easeOut" }}
          >
            <Window
              title={`/stack/${group.code.toLowerCase()}`}
              meta={`${String(group.items.length).padStart(2, "0")} modules`}
              className="h-full"
            >
              <div className="mb-5 flex items-baseline gap-3">
                <span className="font-mono text-sm text-accent glow-text">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-tight">
                  {group.category}
                </h3>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.items.map((item) => (
                  <SkillTile key={item.name} item={item} />
                ))}
              </ul>
            </Window>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
