import { motion } from "framer-motion";

const bioInfo = [
  {
    tag: "01 · Origin",
    info: (
      <>
        Hey there! I'm{" "}
        <span className="text-white font-semibold">Ryan Woo</span>, a software
        developer who traded the hustle of New York for the tech vibes of San
        Francisco.
      </>
    ),
  },
  {
    tag: "02 · Day Job",
    info: (
      <>
        Currently, I'm at{" "}
        <span className="text-blue-400 font-medium">UCSF</span> working with
        their new Artificial Intelligence Computational Drug Discovery and
        Development MS program as an Information Systems Analyst, helping shape
        the future of AI in healthcare.
      </>
    ),
  },
  {
    tag: "03 · Craft",
    info: (
      <>
        Currently, I'm at I love building impactful applications and seamless
        user experiences, with a focus on front-end development (though I'm no
        stranger to back-end work either).
      </>
    ),
  },
  {
    tag: "04 · Currently Learning",
    info: (
      <>
        Always eager to learn, I've recently been diving into{" "}
        <span className="text-blue-400 font-medium">C#</span> and experimenting
        with{" "}
        <span className="text-blue-400 font-medium">2D game development</span>,
        constantly pushing myself to explore new ideas and improve my craft.
      </>
    ),
  },
];
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
      <div className="flex justify-center sm:justify-between items-center gap-4">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20"
          src="me.png"
          alt="Ryan Woo"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-xl"
        >
          {bioInfo.map((block, index) => (
            <div
              key={index}
              className="py-7 border-t border-[grey] last:border-b last:border-[grey]"
            >
              <p className="font-mono uppercase text-[12px] mb-3 text-blue-400">
                {block.tag}
              </p>
              <p>{block.info}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
