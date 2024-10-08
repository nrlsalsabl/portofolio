import React from "react"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import WorkExperience from "./components/WorkExperience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Project"

const App =() => {
    return (
        <div className="bg-black">
          <Navbar />
          <Hero />
          <Skills />
          <WorkExperience />
          <Projects />
          <Contact />
          <Footer />
        </div>
    );
};

export default App