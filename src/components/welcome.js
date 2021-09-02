import React, { useState } from "react";
import { userData } from "../data";
import Roles from "./roles";
import Technologies from "./technologies";

export default function Welcome() {
  //Good idea to desctructure data coming in, makes it easier to use throughout component
  const { firstName } = userData;
  const [hover, setHover] = useState(false);
  //check data before using:
  //console.log("userData: ", userData)

  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: "center",
        color: hover ? "red" : "",
        //border: "2px dashed red",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          margin: "25px",
          fontSize: "40px",
          fontWeight: 700,
          //border: "2px dashed red",
        }}
      >
        Hi, I'm {firstName}!
      </div>
      <Roles />
      <Technologies />
    </div>
  );
}
