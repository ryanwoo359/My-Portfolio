import { LINKS } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t-2 border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 font-mono text-xs text-ink-muted">
        <p>
          © {new Date().getFullYear()} Ryan Woo <span className="text-accent">//</span> built
          with React + Tailwind
        </p>
        <div className="flex items-center gap-5">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href="#welcome" className="hover:text-accent">
            ▲ Top
          </a>
        </div>
      </div>
    </footer>
  );
}
