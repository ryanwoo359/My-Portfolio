import { motion } from "framer-motion";
import Logo from "../components/Logo";
import "./Page.css";

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
      transition: {
        staggerChildren: 0.25, // stagger each logo by 0.2s
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-4">
      <h2 className="text-2xl md:text-2xl lg:text-[3rem] mb-8 font-bold bg-gradient-to-br from-[#0052D4] to-[#6FB1FC] bg-clip-text text-transparent text-center">
        Tech Stack
      </h2>

      <div className="flex flex-col gap-20 w-full max-w-5xl">
        {skills.map((section, index) => (
          <div key={index} className="grid md:grid-cols-12">
            <h3 className="text-4xl font-bold text-[grey] hover:text-[white] text-center md:col-span-5">
              {section.category}
            </h3>
            <motion.div
              className="md:col-span-7 flex flex-wrap justify-center md:justify-start gap-x-11 gap-y-9"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
