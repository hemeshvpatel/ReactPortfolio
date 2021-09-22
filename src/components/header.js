import React from "react";
import MenuBar from "./library/menuBar";
import { userData } from "../data";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
`;

const Name = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.secondary};
  `}
`;

export default function Header() {
  const { firstName } = userData;

    //Curious if we need to pass an object to MenuBar:
  let menuBarProps = [{title: "About", id: 'about'},{title: "Experience", id: 'experience'},{title: "Projects", id: 'projects'}]

  return (
    <Wrapper>
      <Name>{`<${firstName} />`}</Name>
      <MenuBar menuBarProps={menuBarProps} test={true}/>
    </Wrapper>
  );
}
