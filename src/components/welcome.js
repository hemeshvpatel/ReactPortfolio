import React from "react";
import { userData } from "../data";
import Typist from "react-typist";

export default function Welcome() {
  //Good idea to destructure data coming in, makes it easier to use throughout component
  const { firstName, location } = userData;
  //check data before using:
  //console.log("userData: ", userData)

  //styles are all inline, caveit being transition / animation effects. Please see hover.
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: "center",
        //border: "2px dashed red",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
          fontSize: "75px",
          fontWeight: 700,
          //border: "2px dashed red",
        }}
      >
        Hi, I'm {firstName}!
      </div>
      {/* <div style={{ fontSize: "25px" }}>{location}</div> */}
    </div>
  );
}
