import React from "react";
import { userData } from "../data";
import BrandStatements from "./brandStatement";
import ResumeIcon from "./library/resumeIcon";
import SocialIcons from "./library/socialIcons";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const IconsContainer = styled.div`
  display: flex;
`;

export default function Welcome() {
  //Good idea to destructure data coming in, makes it easier to use throughout component
  const { firstName } = userData;
  //check data before using:
  //console.log("userData: ", userData)

  return (
    <Wrapper>
      <Name> Hi, I'm {firstName}!</Name>
      <BrandStatements />
      <IconsContainer>
        <SocialIcons
          github={"https://github.com/"}
          linkedin={"https://linkedin.com"}
          twitter={"https://twitter.com"}
          medium={"https://medium.com"}
          twitch={"https://twitch.com"}
        />
        <ResumeIcon to="https://drive.google.com/file/d/1Nkiadg3LWHWgXUEGA79bCVjpgzIiJRdW/view" />
      </IconsContainer>
    </Wrapper>
  );
}
