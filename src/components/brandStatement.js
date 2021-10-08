import React from "react";
import { brandStatement } from "../data";
import styled, { css } from "styled-components";
import Typist from "react-typist";

//Typist: https://github.com/jstejada/react-typist

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    margin: 25px;
    color: ${theme.colors.primary};
  `}
`;

const StatementStyle = styled.div`
  ${({ theme }) => css`
    margin: 5px;
    text-align: center;
    color: ${theme.colors.secondary};
  `}
`;

export default function BrandStatement(props) {
  return (
    <Wrapper>
      <StatementStyle>
        <Typist cursor={{ hideWhenDone: true }}>{brandStatement}</Typist>
      </StatementStyle>
    </Wrapper>
  );
}
