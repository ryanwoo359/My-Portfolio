import "./Page.css";
import { motion } from "framer-motion";

const socialLinks = [
  {
    className: "github-btn",
    href: "https://github.com/ryanwoo359",
    label: "GitHub",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginRight: "0.5em", verticalAlign: "middle" }}
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    className: "linkedin-btn",
    href: "https://www.linkedin.com/in/ryan-woo-8a359a255/",
    label: "LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ marginRight: "0.5em", verticalAlign: "middle" }}
      >
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div
      id="home"
      className="mx-4 max-w-[1100px] mx-auto flex justify-between items-center w-full flex-wrap sm:justify center"
    >
      <motion.img
        className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-[#646cff]"
        src="me.png"
        alt="Ryan Woo"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", duration: 0.4, bounce: 0.5 },
        }}
        viewport={{ once: true }}
      />

      <div>
        <h1 className="font-bold text-center text-[3.1rem]">
          Welcome To My Portfolio
        </h1>
        <p className="text-center">Full Stack developer</p>
        <div className="social-btns">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              className={link.className}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              style={{ marginLeft: index === 1 ? "1rem" : 0 }}
            >
              {link.icon}
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
