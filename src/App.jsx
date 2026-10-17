import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Project from "./Sections/Project";
import Contact from "./Sections/Contact";
import { ThemeProvider } from "./theme/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <section id="welcome" aria-label="Welcome">
          <Home />
        </section>
        <section id="about" aria-label="About" className="py-24 md:py-32 border-t-2 border-line">
          <About />
        </section>
        <section id="skills" aria-label="Skills" className="py-24 md:py-32 border-t-2 border-line bg-bg-alt bg-grid">
          <Skills />
        </section>
        <section id="projects" aria-label="Projects" className="py-24 md:py-32 border-t-2 border-line">
          <Project />
        </section>
        <section id="contact" aria-label="Contact" className="py-24 md:py-32 border-t-2 border-line bg-bg-alt bg-grid">
          <Contact />
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
