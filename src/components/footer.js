import React from "react";
import ContactButton from "./contactButton";

export default function Footer() {
  //Add link logic to determine which icons should be displayed
  //Add link component for names to link to portfolio sites.

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "20px",
      }}
    >
      <div style={{ fontWeight: 700 }}>
        Created with ❤️ using React.js and the powers of Netlify
      </div>
      <ContactButton />
      <div style={{}}>
        Quicklink Icons Ex: Facebook LinkedIn Twitter Medium Github Email
      </div>
    </div>
  );
}
