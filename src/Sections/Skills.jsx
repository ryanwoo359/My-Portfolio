import { motion } from "framer-motion";

function Icons({ image, name }) {
  return (
    <div className="relative flex flex-col items-center w-28 p-5">
      <img src={image} className="w-10 h-10 object-contain" />
      <span className="font-mono text-[10px] uppercase text-center">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const skills = [
    {
      category: "FRONTEND",
      number: 5,
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
      number: 3,
      items: [
        { src: "Javascript.svg", name: "JavaScript" },
        { src: "Node.svg", name: "Node.JS" },
        { src: "Express.svg", name: "ExpressJS" },
      ],
    },
    {
      category: "DATABASE",
      number: 2,
      items: [
        { src: "Postgres.svg", name: "PostgreSQL" },
        { src: "Mysql.svg", name: "MySQL" },
      ],
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className=" relative max-w-[1300px] mx-auto min-h-screen px-4">
      {/* <span className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 font-mono text-[10px] tracking-[0.3em] uppercase text-white whitespace-nowrap select-none pointer-events-none">
        Skills · Tech Stack · Tools · Languages
      </span> */}
      <h2 className="text-center text-4xl lg:text-[3rem] mb-8 lg:mb-14 font-bold bg-gradient-to-br from-[#0052D4] to-[#6FB1FC] bg-clip-text text-transparent">
        Tech Stack
      </h2>

      <div>
        {skills.map((section, index) => (
          <div
            key={index}
            className="grid grid-cols-[200px_1fr] gap-12 py-12 max-md:grid-cols-1 max-md:gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[12px] tracking-[0.2em] bg-gradient-to-br from-[#0052D4] to-[#6FB1FC] bg-clip-text text-transparent">
                0{index + 1}
              </span>
              <h2
                className="font-mono text-[clamp(28px,3vw,42px)] leading-none font-bold text-[grey]"
                variants={headingVariants}
              >
                {section.category}
              </h2>
              <span className=" font-mono uppercase text-[12px] text-[grey]">
                {section.number} Technologies
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {section.items.map((item, index) => (
                <Icons image={item.src} name={item.name} key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
