import React from "react";
import MenuBar from "./library/menuBar";
import { userData } from "../data";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1000px) / 2);
`;

const Name = styled.div`
  ${({ theme }) => css`
    font-size: 25px;
    color: ${theme.colors.secondary};
  `}
`;

export default function Header() {
  const { firstName } = userData;

  //Curious if we need to pass an object to MenuBar:
  let menuBarProps = [
    { title: "About", id: "about" },
    { title: "Experience", id: "experience" },
    { title: "Projects", id: "projects" },
  ];

  return (
    <Wrapper>
      <Name>{`<${firstName} />`}</Name>
      <MenuBar menuBarProps={menuBarProps} test={true} />
    </Wrapper>
  );
}
