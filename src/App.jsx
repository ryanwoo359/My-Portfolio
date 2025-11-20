import Navbar from "./components/Navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Project from "./Sections/Project";
import "./App.css";

import Test from "./Test";
function App() {
  return (
    <>
      <Navbar />
      <section
        id="home"
        // bg-gradient-to-br from-[#0d0d0d] via-[#0047AB] to-[#1a1a1a]
        className="min-h-screen flex items-center"
      >
        <Home />
      </section>
      <section
        id="about"
        className="sm:mx-0 mx-4 min-h-screen flex items-center scroll-mt-20 lg:scroll-mt-0"
      >
        <About />
      </section>
      <section
        id="skills"
        className="scroll-mt-20 md:scroll-mt-0 lg:min-h-screen flex items-center background my-16 lg:my-0 "
      >
        <Skills />
      </section>
      <section
        id="projects"
        className="scroll-mt-20 md:scroll-mt-0 sm:mx-0 mx-4 lg:min-h-screen flex items-center"
      >
        <Project />
      </section>
      {/* <section>
        <Test />
      </section> */}
    </>
  );
}

export default App;
