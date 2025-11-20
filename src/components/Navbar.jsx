import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const btnRefs = useRef({});
  const navLinksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll position for active nav item
      const offsets = navItems.map((item) => {
        const el = document.getElementById(item.id);
        return el ? el.offsetTop : 0;
      });
      const scrollY = window.scrollY + 80;
      let current = "home";
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i]) {
          current = navItems[i].id;
          break;
        }
      }
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        current = navItems[navItems.length - 1].id;
      }
      setActive(current);

      // Handle navbar background on scroll
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-100 ${
        scrolled
          ? "backdrop-blur-md shadow-lg border-b border-white/20"
          : "backdrop-blur-sm border-b border-white/10"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-8 h-20 flex items-center justify-between">
        {/* Brand Section */}
        <motion.div
          className="flex flex-col items-start cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          onClick={() => handleClick("home")}
        >
          <span className="text-1xl md:text-2xl lg:text-[1.5rem] font-bold bg-gradient-to-br from-[#0052D4] to-[#6FB1FC] bg-clip-text text-transparent tracking-[-0.5px]">
            Ryan Woo
          </span>
          <span className="text-xs md:text-xs lg:text-[0.75rem] text-white/60 font-normal uppercase tracking-[1px]">
            Developer
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <ul
          className="navbar-desktop list-none gap-6 items-center"
          ref={navLinksRef}
        >
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <button
                ref={(el) => (btnRefs.current[item.id] = el)}
                className={`relative bg-none border-none text-white/80 text-sm md:text-sm lg:text-[0.9rem] font-medium uppercase tracking-[1px] px-6 py-3 cursor-pointer transition-all duration-300 overflow-hidden ${
                  active === item.id ? "text-white]" : "hover:text-white"
                }`}
                onClick={() => handleClick(item.id)}
              >
                <span className="relative z-10">{item.label}</span>
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    active === item.id || "hover:opacity-100"
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  style={{ zIndex: -1 }}
                />
              </button>
            </motion.li>
          ))}
          <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <a
              href="Ryan_Woo_Resume.docx.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-none border-none text-white/80 text-sm md:text-sm lg:text-[0.9rem] font-medium uppercase tracking-[1px] px-6 py-3 cursor-pointer transition-all duration-300 overflow-hidden hover:text-white"
            >
              <span className="relative z-10">RESUME</span>
            </a>
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile flex flex-col justify-around w-[30px] h-[25px] bg-none border-none cursor-pointer p-0 z-[1001]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-full h-[3px] bg-white rounded-[2px] transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-x-[6px] translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`w-full h-[3px] bg-white rounded-[2px] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-full h-[3px] bg-white rounded-[2px] transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 translate-x-[6px] -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-md border-l border-white/20 flex flex-col justify-center items-center gap-8 p-8 transition-all duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 999 }}
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            className={`text-xl md:text-xl lg:text-[1.2rem] px-8 py-4 rounded-[50px] cursor-pointer transition-all duration-300 relative overflow-hidden ${
              active === item.id
                ? "text-white shadow-[0_4px_20px_rgba(100,108,255,0.3)]"
                : "text-white/80 hover:text-white"
            }`}
            onClick={() => handleClick(item.id)}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10">{item.label}</span>
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                active === item.id || "hover:opacity-100"
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              style={{ zIndex: -1 }}
            />
          </motion.button>
        ))}
        <motion.a
          href="Ryan_Woo_Resume.docx.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl md:text-xl lg:text-[1.2rem] px-8 py-4 rounded-[50px] cursor-pointer transition-all duration-300 relative overflow-hidden text-white/80 hover:text-white"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <span className="relative z-10">RESUME</span>
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
