import React, { useState } from "react";

export default function NavBar() {
  //TODO - solution for hover effect on different divs
  const [activeMenuItem, setActiveMenuItem] = useState("");

  let menuItemSpacing = "15px";

  return (
    <div style={{ display: "flex", font: "20px" }}>
      <div
        style={{
          marginLeft: menuItemSpacing,
          color: activeMenuItem === "About" ? "red" : "",
          textDecoration: activeMenuItem === "About" ? "underline" : "",
          cursor: "pointer",
        }}
        onMouseEnter={() => setActiveMenuItem("About")}
        onMouseLeave={() => setActiveMenuItem("")}
      >
        About
      </div>
      <div
        style={{
          marginLeft: menuItemSpacing,
          color: activeMenuItem === "Experience" ? "red" : "",
          textDecoration: activeMenuItem === "Experience" ? "underline" : "",
          cursor: "pointer",
        }}
        onMouseEnter={() => setActiveMenuItem("Experience")}
        onMouseLeave={() => setActiveMenuItem("")}
      >
        Experience
      </div>
      <div
        style={{
          marginLeft: menuItemSpacing,
          color: activeMenuItem === "Projects" ? "red" : "",
          textDecoration: activeMenuItem === "Projects" ? "underline" : "",
          cursor: "pointer",
        }}
        onMouseEnter={() => setActiveMenuItem("Projects")}
        onMouseLeave={() => setActiveMenuItem("")}
      >
        Projects
      </div>
    </div>
  );
}
