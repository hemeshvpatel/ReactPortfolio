import React from "react";
import SocialIcons from "./library/socialIcons";
import TextLink from "./library/textLink";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 50px;
    margin-bottom: 20px;
    color: ${theme.colors.primary};
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 600px) {
      margin-bottom: 2rem;
      flex-direction: column;
    }
  `}
`;

const TextContainer = styled.div`
  display: flex;
  white-space: pre-wrap;
  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <TextContainer>
        Designed and Built by{" "}
        <TextLink title={"Cody"} url={"https://github.com/codyrae18"} /> {" & "}
        <TextLink title={"Hemesh"} url={"https://github.com/hemeshvpatel"} />
      </TextContainer>
      <SocialIcons
        github={"https://github.com/"}
        linkedin={"https://linkedin.com"}
        twitter={"https://twitter.com"}
        medium={"https://medium.com"}
        twitch={"https://twitch.com"}
        tooltip={false}
      />
    </Wrapper>
  );
}
