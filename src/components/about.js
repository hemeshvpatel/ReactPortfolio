import React from "react";
import { about } from "../data";
import Roles from "./roles";
import Technologies from "./technologies";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ProfileContainer = styled.div`
  flex-direction: column;
  flex: 1;
`;

const Title = styled.div`
  margin-bottom: 25px;
  font-size: 35px;
  color: white;
`;

const Sections = styled.div`
  ${({ theme }) => css`
    flex: 0 1 auto;
    font-size: 20px;
    margin-bottom: 20px;
    color: ${theme.colors.primary};
  `}
`;

const ProfilePicture = styled.img`
  border-radius: 50%50%;
  flex: 0 1 auto;
`;

export default function About() {
  return (
    <Wrapper id="about">
      <ProfileContainer>
        <Title>About me</Title>
        {(about || []).map((paragraph, key) => {
          return <Sections key={key}>{paragraph}</Sections>;
        })}
        <Roles />
        <Technologies />
      </ProfileContainer>
      <ProfilePicture src="/aboutPic.jpeg" alt="Profile Pic" />
    </Wrapper>
  );
}
