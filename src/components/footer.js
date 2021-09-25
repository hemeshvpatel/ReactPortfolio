import React from "react";
import ContactButton from "./contactButton";
import SocialIcons from "./library/socialIcons";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: wrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    color: ${theme.colors.primary};
  `}
`;

const TextContainer = styled.div`
  white-space: pre-wrap;
`;

export default function Footer() {
  //Add link component for names to link to portfolio sites.
  return (
    <Wrapper>
      <TextContainer>
        Created with ❤️ using React.js and the powers of Netlify
      </TextContainer>
      <ContactButton text="Click to Contact Me" />
      <SocialIcons
        github={"https://github.com/"}
        linkedin={"https://linkedin.com"}
        twitter={"https://twitter.com"}
        medium={"https://medium.com"}
        twitch={"https://twitch.com"}
      />
    </Wrapper>
  );
}
