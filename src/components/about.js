import React from "react";
import { about } from "../data";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "25px",
      }}
    >
      {(about || []).map((item, key) => {
        return (
          <div style={{ margin: "5px" }} key={key}>
            <div style={{}}>{item}</div>
          </div>
        );
      })}
    </div>
  );
}
