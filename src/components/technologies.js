import React from "react";
import { technologies } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava } from "@fortawesome/free-brands-svg-icons";

export default function Technologies() {
  //console.log("technologies: ", technologies);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "25px",
      }}
    >
      Technologies I enjoy working with:
      {(technologies || []).map((technology, key) => {
        return (
          <div style={{ margin: "0 5px 0 5px" }} key={key}>
            {technology}
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "25px",
        }}
      >
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faJava} />
      </div>
    </div>
  );
}
