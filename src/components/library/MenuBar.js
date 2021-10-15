import React from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll"; // https://www.npmjs.com/package/react-scroll

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuItem = styled(LinkS)`
  cursor: pointer;
  color: white;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem calc((100vw-1000px) / 2);
  display: flex;
  margin-left: 2rem;

  //Hover effects here, Styled Component has its own hover. You can add any more styling inside &:hover
  &:hover {
    color: red;
    text-decoration: underline;
  }

  &.active {
    border-bottom: 3px solid red;
  }
`;

const MenuItemResume = styled.a`
  cursor: pointer;
  color: white;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem calc((100vw-1000px) / 2);
  display: flex;
  margin-left: 2rem;

  //Hover effects here, Styled Component has its own hover. You can add any more styling inside &:hover
  &:hover {
    color: red;
    text-decoration: underline;
  }

  &.active {
    border-bottom: 3px solid red;
  }
`;

export default function MenuBar({ menuBarProps }) {
  return (
    <Wrapper>
      {menuBarProps.map((menu, key) => {
        if (menu.title !== "Resume") {
          return (
            <MenuItem
              key={key}
              to={menu.id}
              smooth={true}
              duration={500}
              spy={true}
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
    </Wrapper>
  );
}
