import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link as LinkS } from "react-scroll"; // https://www.npmjs.com/package/react-scroll
import ReactDom from "react-dom";

const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  `}
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.tertiary};
  border: 2px dashed red;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  //z-index: 1001;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const MenuItem = styled(LinkS)`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    align-items: center;
    text-decoration: none;
    padding: 0.5rem calc((100vw-1000px) / 2);
    display: flex;
    padding-left: 7rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    //Hover effects here, Styled Component has its own hover. You can add any more styling inside &:hover
    &:hover {
      color: ${theme.colors.secondary};
      text-decoration: underline;
    }

    &.active {
      background-color: #985353;
    }
  `}
`;

const MenuItemResume = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    align-items: center;
    text-decoration: none;
    padding: 0.5rem calc((100vw-1000px) / 2);
    display: flex;
    padding-top: 2rem;

    //Hover effects here, Styled Component has its own hover. You can add any more styling inside &:hover
    &:hover {
      color: ${theme.colors.secondary};
      text-decoration: underline;
    }

    &.active {
      background-color: #985353;
    }
  `}
`;

export default function Menu({ sideBarProps, show, setShow }) {
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShow && setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  if (!show) return null;
  //return ReactDom.createPortal(
  return (
    <Overlay>
      <StyledMenu ref={ref} show={show}>
        {sideBarProps.map((menu, key) => {
          if (menu.title !== "Resume") {
            return (
              <MenuItem
                key={key}
                to={menu.id}
                smooth={true}
                duration={500}
                spy={true}
                onClick={() => setShow(false)}
              >
                {menu.title}{" "}
              </MenuItem>
            );
          }
          if (menu.title === "Resume") {
            return (
              <MenuItemResume
                key={key}
                href={menu.to}
                target={"_blank"}
                rel="noreferrer"
              >
                {menu.title}
              </MenuItemResume>
            );
          }
          return null;
        })}
      </StyledMenu>
    </Overlay>
    //document.getElementById("root")
  );
}
