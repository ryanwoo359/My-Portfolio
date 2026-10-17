import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { LINKS, PROJECTS } from "../data/profile";

export default function Project() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <SectionHeader index={4} label="Projects" title="Projects">
        Things I've designed and built, from client sites to personal experiments.
      </SectionHeader>

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} index={i} {...project} />
        ))}
      </div>

      <p className="mt-10 font-mono text-sm text-ink-muted">
        <span className="text-accent">&gt;</span> more on{" "}
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
        >
          github.com/ryanwoo359
        </a>
      </p>
    </div>
  );
}
