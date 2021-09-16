import React from "react";
import WorkExperience from "../workExperience";
import About from "../about";
import Welcome from "../welcome";
import Footer from "../footer";
import Projects from "../projects";
import Modal from "./modal";
import NavBar from "./navBar";
import * as GlobalFunctions from "../../globals/globalFunctions";

export default function Layout(props) {
  const { style } = props;

  let defaultStyle = {
    backgroundColor: "grey",
    color: "black",
    padding: "0px 100px 0px 100px",
  };

  //To change layout look at styling for display grid and change accordingly
  //CSS Grid Container Help: https://www.w3schools.com/css/css_grid_container.asp

  return (
    <div style={GlobalFunctions.setNewStyle(defaultStyle, style)}>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "",
          gridTemplateColumns: "auto",
        }}
      >
        <NavBar />
        <Welcome />
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
      >
        <div style={{ display: "flex" }}>
          <Modal
            openButtonProps={{
              location: "topRight",
              text: "Contact Me",
              style: {
                color: "white",
                backgroundColor: "blue",
                fontWeight: 400,
              },
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
    </div>
  );
}
