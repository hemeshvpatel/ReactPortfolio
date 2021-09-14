import React from "react";

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
        Created with ❤️ using React.js and the powers of Netlify
      </div>
      <div style={{ margin: "5px" }}>
        Quicklink Icons Ex: Facebook LinkedIn Twitter Medium Github Email
      </div>
      
    </div>
  );
}
