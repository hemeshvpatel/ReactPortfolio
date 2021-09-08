import React from "react";
import { Button } from "@material-ui/core";

export default function Footer() {
  //Add link logic to determine which icons should be displayed
  //Add link component for names to link to portfolio sites.
  return (
    <div
      style={{
        display: "flex",
        flexDirection: `row`,
        alignItems: "center",
        justifyContent: "space-between",
        margin: "25px",
      }}
    >
      <div style={{ fontWeight: 700, margin: "5px" }}>
        Created with ❤️ by Cody and Hemesh
      </div>
      <div style={{ margin: "5px" }}>
        Quicklink Icons Ex: Facebook LinkedIn Twitter Medium Github Email
      </div>
      <Button variant="contained" color="primary">
        Contact Me
      </Button>
    </div>
  );
}
