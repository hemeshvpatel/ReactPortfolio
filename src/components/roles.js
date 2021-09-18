import React from "react";
import { roles } from "../data";

export default function Roles() {
  //console.log("roles: ", roles);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "25px",
        whiteSpace: "pre-wrap",
      }}
    >
      {`Roles I'm interested in: `}
      {(roles || []).map((role, key) => {
        //console.log("role: ", role)
        return (
          <div style={{}} key={key}>
            {key ? `, ` : null}
            {role}
          </div>
        );
      })}
    </div>
  );
}
