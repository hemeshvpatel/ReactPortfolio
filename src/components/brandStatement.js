import React from "react";
import { brandStatements } from "../data";
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
  //console.log("brandStatement: ", brandStatement);

  return (
    <Wrapper>
      {(brandStatements || []).map((brandStatement, key) => {
        //console.log("brandStatement: ", brandStatement)
        return (
          <StatementStyle key={key}>
            <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 500 }}>
              {brandStatement}
            </Typist>
          </StatementStyle>
        );
      })}
    </Wrapper>
  );
}
