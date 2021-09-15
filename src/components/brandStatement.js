import React from "react";
import { brandStatements } from "../data";
import * as GlobalFunctions from "../globals/globalFunctions";

export default function brandStatement(props) {
  const { style } = props;
  //console.log("brandStatement: ", brandStatement);

  let defaultStyle = { display: "flex", alignItems: "center", margin: "25px" };

  //TODO: Use typing library effect?
  //https://github.com/jstejada/react-typist - library for typing effect

  //Rotate through one statement at time, to keep the website different (after 30 seconds .. etcs)

  return (
    <div style={GlobalFunctions.setNewStyle(defaultStyle, style)}>
      {(brandStatements || []).map((brandStatement, key) => {
        //console.log("brandStatement: ", brandStatement)
        return (
          <div style={{ margin: "5px" }} key={key}>
            {brandStatement}
          </div>
        );
      })}
    </div>
  );
}
