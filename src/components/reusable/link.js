import React from "react";

export default function Link(props) {
  const { company, companyUrl, style } = props;
  console.log("props: ", company, companyUrl);

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
      <a href={`${companyUrl}`} target="_blank" style={linkStyle}>
        {company}
      </a>
    </div>
  );
}
