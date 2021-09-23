import React, { useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  justify-content: space-between;
`;

const MenuItem = styled.div`
  ${({ activeMenuItem }) => css`
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
  `}
`;

export default function NavBar(props) {
  //TODO - solution for hover effect on different divs
  const { menuBarProps, test } = props;
  // const [activeMenuItem, setActiveMenuItem] = useState("");

  // console.log("props", menuBarProps);
  return (
    <Wrapper>
      <MenuItem>About</MenuItem>
      <MenuItem>Experience</MenuItem>
      <MenuItem>Projects</MenuItem>
    </Wrapper>
  );
}
