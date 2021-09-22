import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  font-size: 25px;
`;

const Content = styled.div``;

export default function NavBar() {
  //TODO - solution for hover effect on different divs
  const [activeMenuItem, setActiveMenuItem] = useState("");

  let menuItemSpacing = "15px";

  return (
    <Wrapper>
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
    </Wrapper>
  );
}
