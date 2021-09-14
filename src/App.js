import React from "react";
import WorkExperience from "./components/workExperience";
import About from "./components/about";
import Welcome from "./components/welcome";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Modal from "./components/reusable/modal";

export default function App() {
  //Idea: to be able to re-arrange the layout from here

  return (
    <div>
      <Welcome />
      <About />
      <WorkExperience />
      <Projects />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Modal
          openButtonProps={{
            location: "topRight",
            text: "Contact Me",
            style: { color: "white", backgroundColor: "blue", fontWeight: 400 },
          }}
          closeButtonProps={{
            location: "topRight",
            text: "X",
            style: { backgroundColor: "red" },
          }}
          style={{ backgroundColor: "lightGrey" }}
        />
      </div>
      <Footer />
    </div>
  );
}
