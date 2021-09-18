import React from "react";
import WorkExperience from "../workExperience";
import About from "../about";
import Landing from "../landing";
import Footer from "../footer";
import Projects from "../projects";
import Header from "../header";

import * as GlobalFunctions from "../../globals/globalFunctions";

export default function Layout(props) {
  const { style } = props;

  let defaultStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "0px 250px 0px 250px",
  };

  //To change layout look at styling for display grid and change accordingly
  //CSS Grid Container Help: https://www.w3schools.com/css/css_grid_container.asp

  //Should pages / sections be defined here? Each section should have button to go to next like a page flip or scroll to top of next section

  return (
    <div style={GlobalFunctions.setNewStyle(defaultStyle, style)}>
      <Header />
      <div style={{}}>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "",
            gridTemplateColumns: "auto",
          }}
        >
          <Landing />
          <About />
          <WorkExperience />
          <Projects />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "",
            gridTemplateColumns: "auto auto",
          }}
        ></div>
      </div>
      <Footer />
    </div>
  );
}
