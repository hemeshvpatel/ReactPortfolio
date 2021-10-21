import React from "react";
import styled, { css } from "styled-components";
import { DiReact, DiJavascript, DiRuby, DiJava, DiPython, DiNodejs } from "react-icons/di";
import { SiNetlify, SiHeroku, SiAmazonaws, SiTypescript } from "react-icons/si";

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
        if (technology === "NodeJS") {
          return <DiNodejs key={key} />;
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
        if (technology === "Python") {
          return <DiPython key={key} />;
        }
        if (technology === "Typescript") {
          return <SiTypescript key={key} />;
        }
        if (technology === "Netlify") {
          return <SiNetlify key={key} />;
        }
        if (technology === "Heroku") {
          return <SiHeroku key={key} />;
        }
        if (technology === "AWS") {
          return <SiAmazonaws key={key} />;
        }
        return null;
      })}
    </Wrapper>
  );
}
