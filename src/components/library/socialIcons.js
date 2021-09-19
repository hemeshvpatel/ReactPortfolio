import React from "react";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faTwitch,
  faFacebook,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function SocialIcons(props) {
  const { linkedin, medium, github, twitter, twitch, facebook, contact } =
    props;
  let linkColor = "white";
  let iconSpacing = "15px";

  return (
    <div
      style={{
        display: "flex",
        fontSize: "35px",
      }}
    >
      {github && (
        <a
          href={github}
          target={"_blank"}
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: linkColor,
          }}
        >
          <FontAwesomeIcon style={{ margin: iconSpacing }} icon={faGithub} />
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target={"_blank"}
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: linkColor,
          }}
        >
          <FontAwesomeIcon
            style={{ margin: iconSpacing }}
            icon={faLinkedinIn}
          />
        </a>
      )}
      {medium && (
        <a
          href={medium}
          target={"_blank"}
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: linkColor,
          }}
        >
          <FontAwesomeIcon style={{ margin: iconSpacing }} icon={faMediumM} />
        </a>
      )}
      {twitter && (
        <a
          href={twitter}
          target={"_blank"}
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: linkColor,
          }}
        >
          <FontAwesomeIcon style={{ margin: iconSpacing }} icon={faTwitter} />
        </a>
      )}
      {twitch && (
        <a
          href={twitch}
          target={"_blank"}
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: linkColor,
          }}
        >
          <FontAwesomeIcon style={{ margin: iconSpacing }} icon={faTwitch} />
        </a>
      )}
      {facebook && (
        <a
          href={facebook}
          target={"_blank"}
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: linkColor,
          }}
        >
          <FontAwesomeIcon style={{ margin: iconSpacing }} icon={faFacebook} />
        </a>
      )}
    </div>
  );
}
