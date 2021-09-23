import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link as LinkS } from "react-scroll";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  justify-content: space-between;
`;

const MenuItemContainer = styled.li`
  height: 80px;
`;

const MenuItem = styled(LinkS)`
  cursor: pointer;
  color: white;
  align-items: center;
  text-decoration: none;
  padding: 0 0.5rem;
  display: flex;

  //Hover effects here, Styled Component has its own hover. You can add any more styling inside &:hover
  &:hover {
    color: red;
    text-decoration: underline;
  }

  &.active {
    border-bottom: 3px solid red;
  }
`;

export default function NavBar(props) {
  //TODO - solution for hover effect on different divs
  // const { menuBarProps, test } = props;
  // const [activeMenuItem, setActiveMenuItem] = useState("");

  // console.log("props", menuBarProps);
  return (
    <Wrapper>
      <MenuItemContainer>
        <MenuItem to="about" smooth={true} duration={500} spy={true}>
          About
        </MenuItem>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItem to="experience" smooth={true} duration={500} spy={true}>
          Experience
        </MenuItem>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItem to="project" smooth={true} duration={500} spy={true}>
          Projects
        </MenuItem>
      </MenuItemContainer>
    </Wrapper>
  );
}
