import React from "react";
import styled, { css } from "styled-components";
import { FaGithub, FaLinkedin, FaReact, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.primary};
  `}
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
      <IconsContainer>
        <FaGithub />
        <FaLinkedin />
        <FaReact />
        <FaJava />
        <IoLogoJavascript />
      </IconsContainer>
    </Wrapper>
  );
}
