import React from "react";
import { userData } from "../data";
import BrandStatements from "./BrandStatement";
import SocialIcons from "./library/SocialIcons";
import styled, { css } from "styled-components";
import { Link as LinkS } from "react-scroll"; // https://www.npmjs.com/package/react-scroll
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

//Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

const Intro = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 500;
    color: ${theme.colors.primary};
  `}

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const Name = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: 75px;
    font-weight: 500;
    color: ${theme.colors.primary};
  `}

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 35px;

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const NextSection = styled(LinkS)`
  cursor: pointer;
  color: white;
  align-items: center;
  text-decoration: none;
  display: flex;
  white-space: pre-wrap;
  font-size: 25px;
  position: absolute;
  bottom: 20px;

  //Hover effects here, Styled Component has its own hover. You can add any more styling inside &:hover
  &:hover {
    color: red;
  }

  &.active {
    border-bottom: 3px solid red;
  }
`;

export default function Welcome() {
  //Good idea to destructure data coming in, makes it easier to use throughout component
  const { firstName, lastName } = userData;
  //check data before using:
  //console.log("userData: ", userData)
  return (
    <Wrapper>
      <Intro> Hi, my name is ... </Intro>
      <Name>
        {firstName} {lastName}
      </Name>
      <BrandStatements />
      <IconsContainer>
        <SocialIcons
          github={"https://github.com/"}
          linkedin={"https://linkedin.com"}
          twitter={"https://twitter.com"}
          medium={"https://medium.com"}
          twitch={"https://twitch.com"}
          tooltip={true}
        />
      </IconsContainer>
      <NextSection to={"about"} smooth={true} duration={500} spy={true}>
        <HiOutlineChevronDoubleDown />
      </NextSection>
    </Wrapper>
  );
}
