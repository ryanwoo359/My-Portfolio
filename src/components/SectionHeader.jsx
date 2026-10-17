import { motion } from "motion/react";

export default function SectionHeader({ index, label, title, children }) {
  return (
    <motion.header
      className="mb-12 md:mb-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="hud mb-4">
        {"// "}
        {String(index).padStart(2, "0")} — {label}
      </p>
      <h2 className="font-sans font-bold tracking-tight text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
        <span className="glitch" data-text={title}>
          {title}
        </span>
        <span className="text-accent glow-text">.</span>
      </h2>
      {children && (
        <p className="mt-4 max-w-2xl text-ink-muted text-lg">{children}</p>
      )}
      <div className="mt-6 flex items-center gap-2" aria-hidden="true">
        <span className="h-[3px] w-16 bg-accent shadow-[var(--glow)]" />
        <span className="h-[3px] w-4 bg-accent-2" />
        <span className="h-[3px] w-2 bg-line" />
      </div>
    </motion.header>
  );
}
