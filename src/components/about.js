import React from "react";
import { about } from "../data";
import Roles from "./roles";
import Technologies from "./technologies";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ flexDirection: "column", flex: 1 }}>
        <div style={{ marginBottom: "25px", fontSize: "35px" }}>About me</div>
        {(about || []).map((paragraph, key) => {
          return (
            <div
              style={{
                flex: "0 1 auto",
                fontSize: "20px",
                marginBottom: "20px",
              }}
              key={key}
            >
              {paragraph}
            </div>
          );
        })}
        <Roles />
        <Technologies />
      </div>
      <div>
        <img
          src="/aboutPic.jpeg"
          alt="Profile Pic"
          style={{
            borderRadius: "50%",
            flex: "0 1 auto",
          }}
        />
      </div>
    </div>
  );
}
