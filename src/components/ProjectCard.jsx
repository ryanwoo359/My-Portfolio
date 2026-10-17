import { motion } from "motion/react";
import Window from "./Window";

const GithubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
  </svg>
);

const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "_");

export default function ProjectCard({ name, type, description, website, github, techStack = [], index = 0 }) {
  return (
    <motion.article
      className="h-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: "easeOut" }}
    >
      <Window
        title={`${slug(name)}.app`}
        meta={website ? "● live" : "○ source"}
        className="group flex h-full flex-col transition-transform duration-200 hover:-translate-y-1"
        bodyClassName="flex flex-1 flex-col p-0"
      >
        {/* title screen */}
        <div className="relative overflow-hidden border-b-2 border-line bg-bg bg-grid px-6 py-10">
          <span className="font-mono text-xs tracking-[0.2em] text-ink-muted">
            {String(index + 1).padStart(2, "0")} / {type}
          </span>
          <h3 className="mt-2 text-[clamp(2rem,4vw,2.75rem)] font-bold leading-none tracking-tight">
            <span className="glitch" data-text={name}>
              {name}
            </span>
          </h3>
          <span
            aria-hidden="true"
            className="absolute right-5 -bottom-5 font-pixel text-[7rem] leading-none text-accent opacity-15 transition-opacity group-hover:opacity-30"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-5 p-6">
          <p className="text-ink-muted leading-relaxed">{description}</p>

          <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="border-2 border-line-soft px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em]"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live site <span aria-hidden="true">↗</span>
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <GithubIcon /> Code
              </a>
            )}
          </div>
        </div>
      </Window>
    </motion.article>
  );
}
