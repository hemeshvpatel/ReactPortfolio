import React, { useState } from "react";
import { userData } from "../../data";

export default function NavBar() {
  const { firstName } = userData;
  const [hover, setHover] = useState(false);

  let defaultLinkStyle = {
    fontSize: "20px",
    margin: "10px",
    color: hover ? "red" : "",
  };

  //TODO - solution for hover effect on different divs

  return (
    <div style={{ display: "flex", position: "sticky", top: "0" }}>
      <div
        style={defaultLinkStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >{`<${firstName} />`}</div>
      <div style={defaultLinkStyle}>About</div>
      <div style={defaultLinkStyle}>Experience</div>
      <div style={defaultLinkStyle}>Projects</div>
    </div>
  );
}
