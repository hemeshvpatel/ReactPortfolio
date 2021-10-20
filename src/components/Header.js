import React, { useRef, useState, useEffect } from "react";
import MenuBar from "./library/MenuBar";
import { debounce } from "../globals/utilities/helpers";
import { userData } from "../data";
import styled, { css } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Burger from "./library/MobileBurger";
import Menu from "./library/MobileMenu";
import { useOnClickOutside } from "../globals/hooks";

//Styles
const Wrapper = styled.div`
  ${({ visible, theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    top: ${visible ? "0px" : "-100px"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    font-size: 1.5rem;
    z-index: 999;
    transition: top 0.6s;
    background-color: ${theme.colors.tertiary};
  `}
`;

const Name = styled(LinkR)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`;

const Desktop = styled.div`
  @media screen and (max-width: 725px) {
    display: none;
  }
`;

const Mobile = styled.div`
  @media screen and (min-width: 725px) {
    display: none;
  }
`;

export default function Header() {
  const node = useRef();
  const { firstName } = userData;
  const [open, setOpen] = useState(false);
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

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <Wrapper visible={visible}>
      <Name to="/">{`<${firstName}/>`}</Name>
      <Menu />
      <Desktop>
        <MenuBar menuBarProps={menuBarProps} />
      </Desktop>
      <Mobile ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu menuBarProps={menuBarProps} open={open} setOpen={setOpen} />
      </Mobile>
    </Wrapper>
  );
}
