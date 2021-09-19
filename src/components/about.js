import React from "react";
import { about } from "../data";
import Roles from "./roles";
import Technologies from "./technologies";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flexDirection: "column" }}>
          {(about || []).map((item, key) => {
            return (
              <div style={{ margin: "25px", flex: "0 1 auto" }} key={key}>
                {item}
              </div>
            );
          })}
          <Roles />
          <Technologies />
        </div>
        <img
          src="/aboutPic.jpeg"
          alt="Profile Pic"
          style={{
            borderRadius: "50%",
            flex: "0 1 auto",
          }}
        />
      </div>

      <div style={{ display: "flex" }}></div>
    </div>
  );
}
