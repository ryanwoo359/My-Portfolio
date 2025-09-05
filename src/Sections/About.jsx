import { motion } from "framer-motion";
import "./Page.css";
import Typing from "../components/Typing";

export default function About() {
  return (
    <div id="about" className="w-[1200px] mx-auto">
      <motion.h2
        className="text-2xl md:text-2xl lg:text-[3rem] mb-8 font-bold bg-gradient-to-br from-[#0052D4] to-[#6FB1FC] bg-clip-text text-transparent"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <div className="max-w-[2xl]">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true }}
          className="text-[#9ca3af] w-full"
        >
          Hello! I'm <span className="font-bold text-[white]">Ryan Woo</span>, a
          software developer from New York now based in San Francisco, where I
          work at UCSF new Artificial Intelligence Computational Drug Discovery
          and Development MS program as an Information Systems Analyst. I love
          building impactful applications and seamless user experiences,
          focusing on front-end development with a bit of back-end. Always eager
          to learn, I’ve recently been diving into C# and experimenting with 2D
          game development, constantly pushing myself to explore new ideas and
          improve my craft.
        </motion.p>
      </div>
    </div>
  );
}
