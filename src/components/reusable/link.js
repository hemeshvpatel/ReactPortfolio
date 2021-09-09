import React from "react";

export default function Link(props) {
  const { title, url, style } = props;
  //console.log("props: ", company, companyUrl);

  //Standard Link Styling:
  let linkStyle = {
    color: "#13433e",
    textDecoration: "underline",
    cursor: "pointer",
  };

  //Assign object accordingly if we receive a 'set' style
  if (style) {
    Object.assign(linkStyle, style);
  }

  return (
    <div>
      <a href={`${url}`} target="_blank" rel="noreferrer" style={linkStyle}>
        {title}
      </a>
    </div>
  );
}
