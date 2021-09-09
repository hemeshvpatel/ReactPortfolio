import React from "react";
import WorkExperience from "./components/workExperience";
import About from "./components/about";
import Welcome from "./components/welcome";
import Footer from "./components/footer";
import Projects from "./components/projects";

export default function App() {
  //Idea: to be able to re-arrange the layout from here

  return (
    <div>
      <Welcome />
      <About />
      <WorkExperience />
      <Projects />
      <Footer />
    </div>
  );
}
