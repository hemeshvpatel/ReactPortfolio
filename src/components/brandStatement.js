import React from "react";
import { brandStatements } from "../data";
import * as GlobalFunctions from "../globals/globalFunctions";
import styled from "styled-components";
import Typist from "react-typist";

//Typist: https://github.com/jstejada/react-typist

//Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  margin: 25px;
  color: white;
`;

const StatementStyle = styled.div`
  margin: 5px;
  text-align: center;
`;

export default function BrandStatement(props) {
  const { style } = props;
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
