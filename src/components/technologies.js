import React from "react";
import { technologies } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava } from "@fortawesome/free-brands-svg-icons";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.primary};
  `}
`;

const TechnologiesContainer = styled.div`
  margin: 0 5px 0 5px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
`;

export default function Technologies() {
  //console.log("technologies: ", technologies);

  return (
    <Wrapper>
      Technologies I enjoy working with:
      {(technologies || []).map((technology, key) => {
        return (
          <TechnologiesContainer key={key}>{technology}</TechnologiesContainer>
        );
      })}
      <IconsContainer>
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faJava} />
      </IconsContainer>
    </Wrapper>
  );
}
