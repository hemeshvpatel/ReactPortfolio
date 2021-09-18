import React from "react";
import { userData } from "../data";
import BrandStatements from "./brandStatement";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faTwitch,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

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
          fontWeight: 700,
          //border: "2px dashed red",
        }}
      >
        Hi, I'm {firstName}!
      </div>
      <BrandStatements style={{ color: "red", fontSize: "50px" }} />
      <div style={{ display: "flex", fontSize: "50px" }}>
        <FontAwesomeIcon style={{ margin: "10px" }} icon={faGithub} />
        <FontAwesomeIcon style={{ margin: "10px" }} icon={faLinkedin} />
        <FontAwesomeIcon style={{ margin: "10px" }} icon={faTwitter} />
        <FontAwesomeIcon style={{ margin: "10px" }} icon={faTwitch} />
        <FontAwesomeIcon style={{ margin: "10px" }} icon={faFacebook} />
      </div>
    </div>
  );
}
