import React, { useState, useEffect, useRef } from "react";
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
  //console.log("brandStatements: ", brandStatements);
  const [count, setCount] = useState(0);
  const [statement, setStatement] = useState(brandStatements[0]);
  const statementRef = useRef();

  // useEffect(() => {
  //   console.log("updating", count);
  //   setStatement((statement) => brandStatements[count]);
  // }, [count]);
  let i = 0;

  return (
    <Wrapper>
      {(brandStatements || []).map((brandStatement, key) => {
        if (i === key) {
          i++;
          return (
            <StatementStyle key={key}>
              <Typist
                key={key}
                cursor={{ hideWhenDone: true, hideWhenDoneDelay: 500 }}
              >
                {brandStatement}
              </Typist>
            </StatementStyle>
          );
        }
      })}

      {/* <StatementStyle>
        <Typist
          cursor={{ hideWhenDone: true, hideWhenDoneDelay: 500 }}
          onTypingDone={() => {
            console.log("count = ", count);
            setCount(count + 1);
          }}
        >
          {statement}
        </Typist>
      </StatementStyle> */}
    </Wrapper>
  );
}
