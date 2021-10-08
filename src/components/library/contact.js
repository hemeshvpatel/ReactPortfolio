import React from "react";
import ContactButton from "../contactButton";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 100px;
    margin-bottom: 25px;
    color: ${theme.colors.primary};
    flex-direction: column;
    max-height: 50vh;
  `}
`;

const Section1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const TextContainer1 = styled.div`
  white-space: pre-wrap;
  font-size: 25px;
  text-align: center;
`;

export default function Contact() {
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
    </Wrapper>
  );
}
