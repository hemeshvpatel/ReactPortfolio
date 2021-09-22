import React, { useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  font-size: 25px;
`;

const MenuItem1 = styled.div`
  ${({ activeMenuItem }) => css`
    margin-left: 15px;
    cursor: pointer;
    color: ${activeMenuItem === "About" ? "red" : "white"};
    text-decoration: ${activeMenuItem === "About" ? "underline" : ""};
  `}
`;

const MenuItem2 = styled.div`
  ${({ activeMenuItem }) => css`
    margin-left: 15px;
    cursor: pointer;
    color: ${activeMenuItem === "Experience" ? "red" : "white"};
    text-decoration: ${activeMenuItem === "Experience" ? "underline" : ""};
  `}
`;

const MenuItem3 = styled.div`
  ${({ activeMenuItem }) => css`
    margin-left: 15px;
    cursor: pointer;
    color: ${activeMenuItem === "Projects" ? "red" : "white"};
    text-decoration: ${activeMenuItem === "Projects" ? "underline" : ""};
  `}
`;

const Test = styled.div`
  ${({ test }) => css`
    margin-left: 15px;
    cursor: pointer;
    color: ${test ? "red" : "white"};
    text-decoration: ${test ? "underline" : ""};
  `}
`;

export default function NavBar(props) {
  //TODO - solution for hover effect on different divs
  const { menuBarProps, test } = props;
  const [activeMenuItem, setActiveMenuItem] = useState("");

  // console.log("props", menuBarProps);
  return (
    <Wrapper>
      <MenuItem1
        activeMenuItem={activeMenuItem}
        onMouseEnter={() => setActiveMenuItem("About")}
        onMouseLeave={() => setActiveMenuItem("")}
      >
        About
      </MenuItem1>
      <MenuItem2
        activeMenuItem={activeMenuItem}
        onMouseEnter={() => setActiveMenuItem("Experience")}
        onMouseLeave={() => setActiveMenuItem("")}
      >
        Experience
      </MenuItem2>
      <MenuItem3
        activeMenuItem={activeMenuItem}
        onMouseEnter={() => setActiveMenuItem("Projects")}
        onMouseLeave={() => setActiveMenuItem("")}
      >
        Projects
      </MenuItem3>
      <Test
        test={test}
        activeMenuItem={activeMenuItem}
        onMouseEnter={() => setActiveMenuItem("Test")}
        onMouseLeave={() => setActiveMenuItem("")}
      >
        Test
      </Test>
    </Wrapper>
  );
}
