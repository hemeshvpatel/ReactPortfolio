import React from "react";
import MenuBar from "./library/menuBar";
import { userData } from "../data";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
`;

const Name = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.secondary};
  `}
`;

export default function Header() {
  const { firstName } = userData;

  return (
    <Wrapper>
      <Name>{`<${firstName} />`}</Name>
      <MenuBar />
    </Wrapper>
  );
}
