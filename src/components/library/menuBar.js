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

export default function MenuBar(props) {
  //TODO - solution for hover effect on different divs
  const { menuBarProps } = props;
  //console.log("props", menuBarProps);

  return (
    <Wrapper>
      {menuBarProps.map((menu, key) => (
        <MenuItem
          key={key}
          to={menu.id}
          smooth={true}
          duration={500}
          spy={true}
        >
          {menu.title}{" "}
        </MenuItem>
      ))}
    </Wrapper>
  );
}
