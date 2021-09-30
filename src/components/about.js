import React from "react";
import { about } from "../data";
import Roles from "./roles";
import Technologies from "./technologies";
import styled, { css } from "styled-components";

//Notes:
/* 

Technologies section -> just icons (also try to stack it where the icons come below the profile etc.) - may need to conver to using react-icons package
+ resume link (not with an icon) "Check out my resume here!"
Move the "Roles I'm interested ... " top part of the footer
*/

// used https://css-tricks.com/snippets/css/complete-guide-grid/ for more information

//Styles
const Wrapper = styled.div`
  display: grid;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;

const ProfileContainer = styled.div`
  /* flex-direction: column;
  flex: 1; */
`;

const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: auto 1fr;
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};

  @media screen and (max-width: 1000px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

const Title = styled.div`
  margin-bottom: 25px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  color: white;
`;

const Sections = styled.div`
  ${({ theme }) => css`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${theme.colors.primary};

    @media screen and (max-width: 1000px) {
      max-width: 450px;
    }
  `}
`;

const ProfilePicture = styled.img`
  border-radius: 50%50%;
`;

const ColumnOne = styled.div`
  max-width: 840px;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

const ColumnTwo = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  display: flex;
  justify-content: center;
`;

export default function About() {
  return (
    <Wrapper>
      <InfoRow>
        <ProfileContainer>
          <ColumnOne>
            <Title>About me</Title>
            {(about || []).map((paragraph, key) => {
              return <Sections key={key}>{paragraph}</Sections>;
            })}
            <Technologies />
            {/*update this section -- causing the responsiveness issues*/}
          </ColumnOne>
        </ProfileContainer>
        <ColumnTwo>
          <ProfilePicture src="/aboutPic.jpeg" alt="Profile Pic" />
        </ColumnTwo>
      </InfoRow>
    </Wrapper>
  );
}
