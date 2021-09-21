import React from "react";
import styled from "styled-components";

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

//Styles
const Wrapper = styled.div`
  display: flex;
  font-size: 35px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

export default function SocialIcons(props) {
  const { linkedin, medium, github, twitter, twitch, facebook } = props;
  let iconSpacing = "15px";

  return (
    <Wrapper>
      {github && (
        <Link href={github} target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon style={{ margin: iconSpacing }} icon={faGithub} />
        </Link>
      )}
      {linkedin && (
        <Link href={linkedin} target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon
            style={{ margin: iconSpacing }}
            icon={faLinkedinIn}
          />
        </Link>
      )}
      {medium && (
        <Link href={medium} target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon style={{ margin: iconSpacing }} icon={faMediumM} />
        </Link>
      )}
      {twitter && (
        <Link href={twitter} target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon style={{ margin: iconSpacing }} icon={faTwitter} />
        </Link>
      )}
      {twitch && (
        <Link href={twitch} target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon style={{ margin: iconSpacing }} icon={faTwitch} />
        </Link>
      )}
      {facebook && (
        <Link href={facebook} target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon style={{ margin: iconSpacing }} icon={faFacebook} />
        </Link>
      )}
    </Wrapper>
  );
}
