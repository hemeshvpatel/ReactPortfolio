import React from "react";
import ContactButton from "./contactButton";
import SocialIcons from "./library/socialIcons";

export default function Footer() {
  //Add link logic to determine which icons should be displayed
  //Add link component for names to link to portfolio sites.

  return (
    <div
      style={{
        display: "flex",
        flex: "1 1 0",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "20px",
      }}
    >
      <div style={{ whiteSpace: "pre-wrap" }}>
        Created with ❤️ using React.js and the powers of Netlify
      </div>
      <ContactButton text="Contact Me" icon={true} />
      <SocialIcons
        github={"https://github.com/"}
        linkedin={"https://linkedin.com"}
        twitter={"https://twitter.com"}
        medium={"https://medium.com"}
        twitch={"https://twitch.com"}
      />
    </div>
  );
}
