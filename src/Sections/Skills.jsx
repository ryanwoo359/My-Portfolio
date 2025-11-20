import { motion } from "framer-motion";
import Logo from "../components/Logo";

export default function Skills() {
  const skills = [
    {
      category: "FRONTEND",
      items: [
        { src: "React.svg", name: "ReactJS" },
        { src: "Html.svg", name: "HTML" },
        { src: "Css.svg", name: "CSS" },
        { src: "Tailwind.svg", name: "Tailwind" },
        { src: "Bootstrap.svg", name: "Bootstrap" },
      ],
    },
    {
      category: "BACKEND",
      items: [
        { src: "Javascript.svg", name: "JavaScript" },
        { src: "Node.svg", name: "Node.JS" },
        { src: "Express.svg", name: "ExpressJS" },
      ],
    },
    {
      category: "DATABASE",
      items: [
        { src: "Postgres.svg", name: "PostgreSQL" },
        { src: "Mysql.svg", name: "MySQL" },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col md:items-center justify-center w-full min-h-screen px-4">
      <h2 className="text-4xl lg:text-[3rem] mb-8 lg:mb-14 font-bold bg-gradient-to-br from-[#0052D4] to-[#6FB1FC] bg-clip-text text-transparent">
        Tech Stack
      </h2>

      <div className="flex flex-col gap-10 lg:gap-20 w-full max-w-5xl">
        {skills.map((section, index) => (
          <div key={index} className="grid md:grid-cols-12 items-start">
            <motion.h3
              className="text-3xl md:text-5xl mb-4 font-bold text-[grey] hover:text-[white] text-center md:col-span-5"
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {section.category}
            </motion.h3>

            <motion.div
              className="md:col-span-7 flex flex-wrap justify-center md:justify-start gap-x-11 gap-y-9"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {section.items.map((item, idx) => (
                <Logo src={item.src} name={item.name} key={idx} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
