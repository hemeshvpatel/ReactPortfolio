import React from "react";
import MenuBar from "./library/menuBar";
import { userData } from "../data";
import styled, { css } from "styled-components";
import { Link as LinkR } from "react-router-dom";

//Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1000px) / 2);
  font-size: 35px;
  margin-top: 20px;

  @media screen and (max-width: 750px) {
    font-size: 15px;
  }
`;

const Name = styled(LinkR)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`;

export default function Header() {
  const { firstName } = userData;

  //Curious if we need to pass an object to MenuBar:
  let menuBarProps = [
    { title: "About", id: "about" },
    { title: "Experience", id: "experience" },
    { title: "Projects", id: "project" },
  ];

  return (
    <Wrapper>
      <Name to="/">{`<${firstName}/>`}</Name>
      <MenuBar menuBarProps={menuBarProps} test={true} />
    </Wrapper>
  );
}
