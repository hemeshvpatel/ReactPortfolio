import React from "react";
import { userData } from "../data";
import BrandStatements from "./brandStatement";
import ResumeIcon from "./library/resumeIcon";
import SocialIcons from "./library/socialIcons";

export default function Welcome() {
  //Good idea to destructure data coming in, makes it easier to use throughout component
  const { firstName } = userData;
  //check data before using:
  //console.log("userData: ", userData)

  //styles are all inline, caveit being transition / animation effects. Please see hover.
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: "center",
        //border: "2px dashed red",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
          fontSize: "75px",
          fontWeight: 500,
          //border: "2px dashed red",
        }}
      >
        Hi, I'm {firstName}!
      </div>
      <BrandStatements style={{ color: "red", fontSize: "50px" }} />
      <div style={{ display: "flex" }}>
        <SocialIcons
          github={"https://github.com/"}
          linkedin={"https://linkedin.com"}
          twitter={"https://twitter.com"}
          medium={"https://medium.com"}
          twitch={"https://twitch.com"}
        />
        <ResumeIcon to="https://drive.google.com/file/d/1Nkiadg3LWHWgXUEGA79bCVjpgzIiJRdW/view" />
      </div>
    </div>
  );
}
