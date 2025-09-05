import Navbar from "./components/Navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Project from "./Sections/Project";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="h-screen bg-gradient-to-br from-[#0d0d0d] via-[#0047AB] to-[#1a1a1a] flex items-center"
      >
        <Home />
      </section>
      <section
        id="about"
        className="sm:mx-0 mx-4 min-h-screen flex items-center"
      >
        <About />
      </section>
      <section
        id="skills"
        className="sm:mx-0 mx-4 min-h-screen flex items-center background"
      >
        <Skills />
      </section>
      <section
        id="projects"
        className="sm:mx-0 mx-4 min-h-screen flex items-center"
      >
        <Project />
      </section>
    </>
  );
}

export default App;
