import React from "react";

export default function Section(props) {
  const { children } = props;
  let sectionContainer = {
    minHeight: "100vh",
    display: "flex",
    margin: "auto",
    flex: "0 1 auto",
    flexDirection: "column",
    justifyContent: "center",
    //padding: "25px",
  };

  return <div style={sectionContainer}>{children}</div>;
}
