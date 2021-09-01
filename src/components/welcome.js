import React from "react";
import { userData } from "../data";
import Roles from "./roles";
import Technologies from "./technologies";

export default function Welcome() {
  const { firstName } = userData;
  //console.log("userData: ", userData)
  return (
    <div
      style={{ display: `flex`, flexDirection: `column`, alignItems: "center" }}
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
