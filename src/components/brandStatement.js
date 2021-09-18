import React from "react";
import { brandStatements } from "../data";
import * as GlobalFunctions from "../globals/globalFunctions";
import Typist from "react-typist";

export default function brandStatement(props) {
  const { style } = props;
  //console.log("brandStatement: ", brandStatement);

  let defaultStyle = {
    display: `flex`,
    flexDirection: `column`,
    alignItems: "center",
    fontSize: "25px",
    margin: "25px",
    //border: "2px dashed red",
  };

  //TODO: Use typing library effect?
  //https://github.com/jstejada/react-typist - library for typing effect

  //Rotate through one statement at time, to keep the website different (after 30 seconds .. etcs)

  return (
    <div style={GlobalFunctions.setNewStyle(defaultStyle, style)}>
      {(brandStatements || []).map((brandStatement, key) => {
        //console.log("brandStatement: ", brandStatement)
        return (
          <div style={{ margin: "5px" }} key={key}>
            <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 500 }}>
              {brandStatement}
            </Typist>
          </div>
        );
      })}
    </div>
  );
}
