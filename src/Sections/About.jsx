import { motion } from "framer-motion";
import Typing from "../components/Typing";

export default function About() {
  return (
    <div className="w-[1300px] mx-auto">
      <motion.h2
        className="text-4xl text-center lg:text-[3rem] mb-8 lg:mb-14 font-bold bg-gradient-to-br from-[#0052D4] to-[#6FB1FC] bg-clip-text text-transparent"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true, amount: 1 }}
      >
        About Me
      </motion.h2>
      <div className="flex flex-wrap-reverse justify-center sm:justify-between items-center gap-8">
        <div className="max-w-[2xl]">
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true }}
            className="text-[#9ca3af] w-full lg:text-2xl max-w-[700px]"
          >
            Hello! I'm <span className="font-bold text-[white]">Ryan Woo</span>,
            a software developer from New York now based in San Francisco, where
            I work at UCSF new Artificial Intelligence Computational Drug
            Discovery and Development MS program as an Information Systems
            Analyst. I love building impactful applications and seamless user
            experiences, focusing on front-end development with a bit of
            back-end. Always eager to learn, I’ve recently been diving into C#
            and experimenting with 2D game development, constantly pushing
            myself to explore new ideas and improve my craft.
          </motion.p>
        </div>
        <motion.img
          className="w-60 h-60 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-gray-600"
          src="me.png"
          alt="Ryan Woo"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
