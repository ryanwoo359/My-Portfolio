// Everything personal lives here so content can be edited without touching layout.

// TODO: replace with the address you want people to reach you at.
export const EMAIL = "your.email@example.com";

export const LINKS = {
  github: "https://github.com/ryanwoo359",
  linkedin: "https://www.linkedin.com/in/ryan-woo-8a359a255/",
  resume: "Ryan_Woo_Resume.docx.pdf",
};

export const NAV_ITEMS = [
  { id: "welcome", label: "Welcome" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Leave `website` or `github` out to hide that link.
export const PROJECTS = [
  {
    name: "RPM NYC",
    type: "Client Website",
    description:
      "A modern, responsive website for RPM NYC designed to enhance their digital footprint.",
    website: "https://rpmnyc.vercel.app/",
    github: "https://github.com/ryanwoo359/RPM-NYC-2",
    techStack: ["Next.JS", "TypeScript", "Tailwind", "Node.js"],
  },
  {
    name: "Portfolio",
    type: "Personal Site",
    description:
      "This site: a retro-futuristic portfolio with light and dark modes, built to highlight my skills, projects and experience.",
    github: "https://github.com/ryanwoo359/My-Portfolio",
    techStack: ["React", "Tailwind", "Motion"],
  },
];

export const FACTS = [
  { label: "Location", value: "San Francisco, CA" },
  { label: "Origin", value: "New York, NY" },
  { label: "Role", value: "Information Systems Analyst II" },
  { label: "Employer", value: "UCSF" },
];

export const WORK = {
  role: "Information Systems Analyst II",
  org: "UCSF",
  summary:
    "I help drive the adoption and implementation of new educational technologies and systems at UCSF.",
  duties: [
    "Lead efforts to identify innovative ed-tech solutions",
    "Improve existing technology workflows across teams",
    "Support tools that enhance learning for students, faculty and staff",
    "Build front-end-focused full stack applications",
  ],
};

export const PASSIONS = [
  {
    glyph: "▶",
    title: "2D Game Dev",
    text: "Experimenting with 2D game development: mechanics, sprites and game loops.",
  },
  {
    glyph: "#",
    title: "Learning C#",
    text: "Diving into C# to broaden my toolkit beyond the JavaScript world.",
  },
  {
    glyph: "◆",
    title: "Seamless UX",
    text: "Obsessing over interfaces that feel fast, clear and effortless to use.",
  },
  {
    glyph: "↗",
    title: "Always Shipping",
    text: "Building impactful side projects and pushing myself to explore new ideas.",
  },
];

// `icon` is a file in /public. Leave it out to show a monogram tile instead.
export const SKILLS = [
  {
    category: "Languages",
    code: "LANG",
    items: [
      { name: "JavaScript", icon: "Javascript.svg" },
      { name: "TypeScript", mono: "TS" },
      { name: "HTML", icon: "Html.svg" },
      { name: "CSS", icon: "Css.svg" },
      { name: "C#", mono: "C#", note: "learning" },
    ],
  },
  {
    category: "Frontend",
    code: "FE",
    items: [
      { name: "React", icon: "React.svg" },
      { name: "Tailwind", icon: "Tailwind.svg" },
      { name: "Bootstrap", icon: "Bootstrap.svg" },
    ],
  },
  {
    category: "Backend",
    code: "BE",
    items: [
      { name: "Node.js", icon: "Node.svg" },
      { name: "Express", icon: "Express.svg", invertDark: true },
    ],
  },
  {
    category: "Database",
    code: "DB",
    items: [
      { name: "PostgreSQL", icon: "Postgres.svg" },
      { name: "MySQL", icon: "Mysql.svg" },
    ],
  },
];
