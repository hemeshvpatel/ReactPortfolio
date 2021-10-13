import React, { useState } from "react";
import MenuBar from "./library/MenuBar";
import SideBar from "./library/SideBar";
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
  font-size: 1.5rem;
  margin-top: 20px;
  z-index: 999;

  @media screen and (max-width: 800px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

const Name = styled(LinkR)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`;

const Desktop = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Mobile = styled.div`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export default function Header() {
  const { firstName } = userData;
  const [show, setShow] = useState(false);
  let menuBarProps = [
    { title: "About", id: "about" },
    { title: "Experience", id: "experience" },
    { title: "Projects", id: "project" },
    { title: "Contact", id: "contact" },
    {
      title: "Resume",
      to: "https://resumegenius.com/resume-samples/web-developer-resume-example",
    },
  ];

  return (
    <Wrapper>
      <Name to="/">{`<${firstName}/>`}</Name>
      <Desktop>
        <MenuBar menuBarProps={menuBarProps} />
      </Desktop>
      <Mobile>
        <GiHamburgerMenu
          style={{ color: "white" }}
          onClick={() => setShow(!show)}
        />
      </Mobile>
      <SideBar
        sideBarProps={menuBarProps}
        show={show}
        onClose={() => setShow(false)}
      />
    </Wrapper>
  );
}
