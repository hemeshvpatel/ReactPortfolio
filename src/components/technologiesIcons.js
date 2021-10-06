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
    font-size: 25px;
  `}
`;

export default function TechnologiesIcons({ technologies }) {
  return (
    <Wrapper>
      {Object.keys(technologies).map((technology, key) => {
        if (technology === "Javascript") {
          return <DiJavascript key={key} />;
        }
        if (technology === "ReactJS") {
          return <DiReact key={key} />;
        }
        if (technology === "Java") {
          return <DiJava key={key} />;
        }
        if (technology === "Ruby") {
          return <DiRuby key={key} />;
        }
        if (technology === "Netlify") {
          return <SiNetlify key={key} />;
        }
      })}
    </Wrapper>
  );
}
