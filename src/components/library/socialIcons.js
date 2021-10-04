import React, { useState } from "react";
import styled, { css } from "styled-components";
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
`;

//This must be defined above Link in order to work for the hover effect targeting ToolTip
const ToolTip = styled.div`
  ${({ active }) => css`
    transition: color 0.5s;
    color: black;
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
  `}
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: color 0.5s;
  text-decoration: none;
  color: white;
  margin: 25px;
  font-size: 35px;

  &:hover {
    color: red;
  }

  &:hover ${ToolTip} {
    color: red;
  }
`;

export default function SocialIcons(props) {
  const { linkedin, medium, github, twitter, twitch, facebook } = props;
  const [active, setActive] = useState(false);

  return (
    <Wrapper>
      {github && (
        <Link
          href={github}
          target={"_blank"}
          rel="noreferrer"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <FaGithub />
          <ToolTip active={active}>{"Github"}</ToolTip>
        </Link>
      )}
      {linkedin && (
        <Link
          href={linkedin}
          target={"_blank"}
          rel="noreferrer"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <FaLinkedin />
          <ToolTip active={active}>{"LinkedIn"}</ToolTip>
        </Link>
      )}
      {medium && (
        <Link href={medium} target={"_blank"} rel="noreferrer">
          <FaMediumM />
          <ToolTip active={active}>{"Medium"}</ToolTip>
        </Link>
      )}
      {twitter && (
        <Link href={twitter} target={"_blank"} rel="noreferrer">
          <FaTwitter />
          <ToolTip active={active}>{"Twitter"}</ToolTip>
        </Link>
      )}
      {twitch && (
        <Link href={twitch} target={"_blank"} rel="noreferrer">
          <FaTwitch />
          <ToolTip active={active}>{"Twitch"}</ToolTip>
        </Link>
      )}
      {facebook && (
        <Link href={facebook} target={"_blank"} rel="noreferrer">
          <FaFacebook />
          <ToolTip active={active}>{"Facebook"}</ToolTip>
        </Link>
      )}
    </Wrapper>
  );
}
