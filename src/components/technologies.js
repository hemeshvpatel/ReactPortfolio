import React from "react";
import { technologies } from "../data";

export default function Technologies() {
  //console.log("technologies: ", technologies);

  return (
    <div style={{ display: "flex", alignItems: "center", margin: "25px" }}>
      {(technologies || []).map((technology, key) => {
        return (
          <div style={{ margin: "5px" }} key={key}>
            {technology}
          </div>
        );
      })}
    </div>
  );
}
