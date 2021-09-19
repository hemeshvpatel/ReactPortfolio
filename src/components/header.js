import React from "react";
import MenuBar from "./library/menuBar";
import { userData } from "../data";

export default function Header() {
  const { firstName } = userData;

  return (
    <div
      style={{
        fontSize: "20px",
        fontWeight: 500,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", color: "red" }}>{`<${firstName} />`}</div>
      <MenuBar />
    </div>
  );
}
