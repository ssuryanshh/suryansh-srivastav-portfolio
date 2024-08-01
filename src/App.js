import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import Project from "./screens/Projects/Project";
import Skills from "./screens/Skills/Skills";
import Education from "./screens/Education/Education";
import particles from "./utils/particles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

function App() {
  const [init, setInit] = useState(false);
  const location = useLocation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const renderParticlesInHome = location.pathname === "/";
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
      {renderParticlesInHome && init && (
        <Particles id="particles" particlesLoaded={particlesLoaded} options={particles} />
      )}
      <Navbar />
      <div className="App__main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;