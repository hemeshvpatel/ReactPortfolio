import React from "react";
import WorkExperience from "../workExperience";
import About from "../about";
import Landing from "../landing";
import Footer from "../footer";
import Projects from "../projects";
import Header from "../header";
import Section from "./section";

export default function Layout() {
  let globalStyle = {
    backgroundColor: "black",
    color: "white",
    margin: 0,
    overflow: "hidden",
    padding: "0px 200px 0px 200px",
    fontFamily: "sans-serif",
  };

  //To change layout look at styling for display grid and change accordingly
  //CSS Grid Container Help: https://www.w3schools.com/css/css_grid_container.asp

  //Section is like pages for the links at the top, this keeps everything contained

  return (
    <div style={globalStyle}>
      <Header />
      <Section children={<Landing />} />
      <Section id="About" title="About me" children={<About />} />
      <Section
        id="WorkExperience"
        title="Work Experience"
        children={<WorkExperience />}
      />
      <Section id="Projects" title="Projects" children={<Projects />} />
      <Footer />
    </div>
  );
}
