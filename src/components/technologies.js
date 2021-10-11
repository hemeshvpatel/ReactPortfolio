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
  justify-content: center;
  font-size: 25px;
`;

const Icon = styled.div`
  margin: 25px;
`;

export default function Technologies() {
  //console.log("technologies: ", technologies);

  return (
    <Wrapper>
      <IconsContainer>
        <Icon>
          <FaGithub />
        </Icon>
        <Icon>
          <FaLinkedin />
        </Icon>

        <Icon>
          <FaReact />
        </Icon>

        <Icon>
          <FaJava />
        </Icon>

        <Icon>
          <IoLogoJavascript />
        </Icon>
      </IconsContainer>
    </Wrapper>
  );
}
