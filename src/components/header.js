import React, { useState } from "react";
import MenuBar from "./library/menuBar";
import SideBar from "./library/sideBar";
import { userData } from "../data";
import styled, { css } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

//Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1000px) / 2);
  font-size: 25px;
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
  const [show, setShow] = useState(false);

  //mobile hook to detect screen width and whether to display hamburger vs reg menu

  //Curious if we need to pass an object to MenuBar:
  let menuBarProps = [
    { title: "About", id: "about" },
    { title: "Experience", id: "experience" },
    { title: "Projects", id: "project" },
    { title: "Contact", id: "contact" },
    {
      title: "Resume",
      to: "https://drive.google.com/file/d/1Nkiadg3LWHWgXUEGA79bCVjpgzIiJRdW/view",
    },
  ];

  return (
    <Wrapper>
      <Name to="/">{`<${firstName}/>`}</Name>
      <GiHamburgerMenu
        style={{ color: "white" }}
        onClick={() => setShow(!show)}
      />
      {/* <MenuBar menuBarProps={menuBarProps} /> */}
      <SideBar sideBarProps={menuBarProps} show={show} onClose={() => setShow(false)}/>
    </Wrapper>
  );
}
