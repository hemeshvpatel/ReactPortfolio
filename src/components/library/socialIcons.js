import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTwitch,
  FaFacebook,
  FaMediumM,
} from "react-icons/fa";

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
          <FaGithub style={{ margin: iconSpacing }} />
        </Link>
      )}
      {linkedin && (
        <Link href={linkedin} target={"_blank"} rel="noreferrer">
          <FaLinkedin style={{ margin: iconSpacing }} />
        </Link>
      )}
      {medium && (
        <Link href={medium} target={"_blank"} rel="noreferrer">
          <FaMediumM style={{ margin: iconSpacing }} />
        </Link>
      )}
      {twitter && (
        <Link href={twitter} target={"_blank"} rel="noreferrer">
          <FaTwitter style={{ margin: iconSpacing }} />
        </Link>
      )}
      {twitch && (
        <Link href={twitch} target={"_blank"} rel="noreferrer">
          <FaTwitch style={{ margin: iconSpacing }} />
        </Link>
      )}
      {facebook && (
        <Link href={facebook} target={"_blank"} rel="noreferrer">
          <FaFacebook style={{ margin: iconSpacing }} />
        </Link>
      )}
    </Wrapper>
  );
}
