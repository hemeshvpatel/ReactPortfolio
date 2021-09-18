import React, { useState } from "react";
import { userData } from "../../data";

export default function NavBar() {
  const { firstName } = userData;

  //TODO - solution for hover effect on different divs
  const [activeMenuItem, setActiveMenuItem] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        //position: "sticky",
        top: "0px",
        height: "50px",
        paddingTop: "20px",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontWeight: 600,
          margin: "10px",
          color: "red",
        }}
      >{`<${firstName} />`}</div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            fontSize: "20px",
            margin: "10px",
            color: activeMenuItem === "About" ? "red" : "",
            textDecoration: activeMenuItem === "About" ? "underline" : "",
          }}
          onMouseEnter={() => setActiveMenuItem("About")}
          onMouseLeave={() => setActiveMenuItem("")}
        >
          About
        </div>
        <div
          style={{
            fontSize: "20px",
            margin: "10px",
            color: activeMenuItem === "Experience" ? "red" : "",
            textDecoration: activeMenuItem === "Experience" ? "underline" : "",
          }}
          onMouseEnter={() => setActiveMenuItem("Experience")}
          onMouseLeave={() => setActiveMenuItem("")}
        >
          Experience
        </div>
        <div
          style={{
            fontSize: "20px",
            margin: "10px",
            color: activeMenuItem === "Projects" ? "red" : "",
            textDecoration: activeMenuItem === "Projects" ? "underline" : "",
          }}
          onMouseEnter={() => setActiveMenuItem("Projects")}
          onMouseLeave={() => setActiveMenuItem("")}
        >
          Projects
        </div>
      </div>
    </div>
  );
}
