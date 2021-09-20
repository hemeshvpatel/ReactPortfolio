import React from "react";
import { brandStatements } from "../data";
import * as GlobalFunctions from "../globals/globalFunctions";

//Typist: https://github.com/jstejada/react-typist
import Typist from "react-typist";

import styled, { css } from "styled-components";

const BrandContainer = styled.div`
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
    <BrandContainer>
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
    </BrandContainer>
  );
}
