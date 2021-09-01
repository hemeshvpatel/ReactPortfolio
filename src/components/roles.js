import React from "react";
import { roles } from "../data";

export default function Roles() {
  console.log("roles: ", roles);

  return (
    <div style={{ display: "flex", alignItems: "center", margin: "25px" }}>
      {(roles || []).map((role, key) => {
        return (
          <div style={{ margin: "5px" }} key={key}>
            {role}
          </div>
        );
      })}
    </div>
  );
}
