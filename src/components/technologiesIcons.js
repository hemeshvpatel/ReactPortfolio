import React from "react";
import styled, { css } from "styled-components";
import { DiReact, DiJavascript, DiRuby, DiJava } from "react-icons/di";
import { SiNetlify } from "react-icons/si";

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: ${theme.colors.primary};
    font-size: 25px;
  `}
`;

export default function TechnologiesIcons({ technologies }) {
  return (
    <Wrapper>
      {Object.keys(technologies).map((technology, key) => {
        if (technology === "Javascript") {
          return <DiJavascript />;
        }
        if (technology === "ReactJS") {
          return <DiReact />;
        }
        if (technology === "Java") {
          return <DiJava />;
        }
        if (technology === "Ruby") {
          return <DiRuby />;
        }
        if (technology === "Netlify") {
          return <SiNetlify />;
        }
      })}
    </Wrapper>
  );
}
