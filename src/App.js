import React from "react";
import WorkExperience from "./components/workExperience";
import About from "./components/about";
import Welcome from "./components/welcome";

export default function App() {
  return (
    <div>
      <Welcome />
      <About />
      <WorkExperience />
    </div>
  );
}
