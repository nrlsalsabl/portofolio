import React from "react"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import WorkExperience from "./components/WorkExperience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

const App =() => {
    return (
        <div className="bg-black">
          <Navbar />
          <Hero />
          <Skills />
          <WorkExperience />
          <AboutMe />
          <Contact />
          <Footer />
        </div>
    );
};

export default App