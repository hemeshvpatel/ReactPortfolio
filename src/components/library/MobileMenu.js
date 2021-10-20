import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link as LinkS } from "react-scroll"; // https://www.npmjs.com/package/react-scroll
import ReactDom from "react-dom";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(69 26 26);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  width: 70vw;
  height: 70vh;
  padding: 2rem;
  position: absolute;
  top: 125px;
  right: 0;
  transition: transform 0.3s ease-in-out;
`;

const MenuItem = styled(LinkS)`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    align-items: center;
    text-decoration: none;
    padding: 2rem;
    display: flex;
    transition: color 0.3s linear;

    //Hover effects here, Styled Component has its own hover. You can add any more styling inside &:hover
    &:hover {
      color: ${theme.colors.secondary};
      text-decoration: underline;
    }

    &.active {
      border: 1px solid ${theme.colors.secondary};
    }
  `}
`;

const MenuItemResume = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    align-items: center;
    text-decoration: none;
    padding: 2rem;
    display: flex;
    transition: color 0.3s linear;

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

export default function Menu({ menuBarProps, open, setOpen }) {
  return (
    <StyledMenu open={open}>
      {(menuBarProps || []).map((menu, key) => {
        if (menu.title !== "Resume") {
          return (
            <MenuItem
              key={key}
              to={menu.id}
              smooth={true}
              duration={500}
              spy={true}
              onClick={() => setOpen(false)}
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
  );
}
