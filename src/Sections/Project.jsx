import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "RPM NYC",
    description:
      "A modern, responsive website for RPM NYC designed to enhance their digital footprint.",
    website: "https://rpm-nyc.vercel.app/",
    github: "https://github.com/ryanwoo359/RPM-NYC",
    techStack: ["ReactJS", "CSS", "Node.js"],
  },
  {
    name: "Portfolio",
    description:
      "My portfolio designed to highlight my skills, projects, and experiences with modern web technologies",
    website: "a",
    github: "https://github.com/ryanwoo359/My-Portfolio",
    techStack: ["ReactJS", "TailwindCSS"],
  },
];
export default function Project() {
  return (
    <div id="projects" className="w-[1200px] mx-auto">
      <h2 className="text-4xl text-center lg:text-[3rem] mb-8 lg:mb-14 font-bold bg-gradient-to-br from-[#0052D4] to-[#6FB1FC] bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="flex justify-around flex-wrap gap-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
