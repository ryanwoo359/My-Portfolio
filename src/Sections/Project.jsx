import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import "./Page.css";

const projects = [
  {
    name: "RPM NYC",
    description:
      "A modern, responsive website for RPM NYC designed to enhance their digital footprint.",
    website: "https://rpm-nyc.vercel.app/",
    github: "https://github.com/ryanwoo359/RPM-NYC",
  },
];

export default function Project() {
  return (
    <div id="projects" className="w-[1200px] mx-auto">
      <h2 className="text-2xl md:text-2xl lg:text-[3rem] mb-8 font-bold bg-gradient-to-br from-[#0052D4] to-[#6FB1FC] bg-clip-text text-transparent">
        Projects
      </h2>
      <ProjectCard />
    </div>
  );
}
