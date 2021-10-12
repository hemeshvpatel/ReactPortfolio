import React from "react";
import { about } from "../data";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  display: grid;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 4rem;
  justify-content: center;
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
  color: red;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

const Sections = styled.div`
  ${({ theme }) => css`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${theme.colors.primary};

    @media screen and (max-width: 600px) {
      max-width: 450px;
      font-size: 15px;
    }
  `}
`;

const ProfilePicture = styled.img`
  border-radius: 50%50%;

  @media screen and (max-width: 600px) {
    width: 250px;
  }
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
        <ColumnOne>
          <Title>About me</Title>
          {(about || []).map((paragraph, key) => {
            return <Sections key={key}>{paragraph}</Sections>;
          })}
        </ColumnOne>
        <ColumnTwo>
          <ProfilePicture src="/aboutPic.jpeg" alt="Profile Pic" />
        </ColumnTwo>
      </InfoRow>
    </Wrapper>
  );
}
