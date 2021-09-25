import React from "react";
import styled from "styled-components";
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

export default function MenuBar(props) {
  //TODO - solution for hover effect on different divs
  const { menuBarProps } = props;
  //console.log("props", menuBarProps);

  return (
    <Wrapper>
      {menuBarProps.map((menu, key) => (
        <MenuItemContainer key={key + 1}>
          <MenuItem
            key={key}
            to={menu.id}
            smooth={true}
            duration={500}
            spy={true}
          >
            {menu.title}{" "}
          </MenuItem>
        </MenuItemContainer>
      ))}
    </Wrapper>
  );
}
