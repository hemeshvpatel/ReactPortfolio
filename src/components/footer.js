import React from "react";
import ContactButton from "./contactButton";
import SocialIcons from "./library/socialIcons";
import styled, { css } from "styled-components";
import { FaHeart } from "react-icons/fa";

//Design
// Top: I'm always interested in freelancing, specifically in front-end! [Hand] Click here to get in touch
// Bottom: Created .... Quick Icons

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-bottom: 20px;
    color: ${theme.colors.primary};
    flex-direction: column;
  `}
`;

const Section1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
  font-weight: 600;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Section2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const TextContainer1 = styled.div`
  white-space: pre-wrap;
  font-size: 25px;
  text-align: center;
`;

const TextContainer2 = styled.div`
  white-space: pre-wrap;
`;

export default function Footer() {
  //Add link component for names to link to portfolio sites.
  return (
    <Wrapper>
      <Section1>
        <TextContainer1>
          Have a question? Just want to say hi! Have an exciting opportunity to
          talk about!? My inbox is always open!
        </TextContainer1>
        <ContactButton text="Say Hello" />
      </Section1>
      <Section2>
        <TextContainer2>
          Created with <FaHeart style={{ color: "red" }} /> using React.js and
          the powers of Netlify
        </TextContainer2>
        <SocialIcons
          github={"https://github.com/"}
          linkedin={"https://linkedin.com"}
          twitter={"https://twitter.com"}
          medium={"https://medium.com"}
          twitch={"https://twitch.com"}
          tooltip={false}
        />
      </Section2>
    </Wrapper>
  );
}
