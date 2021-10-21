import React, { useState } from "react";
import { workExperience } from "../data";
import TextLink from "./library/TextLink";
import styled, { css } from "styled-components";
import { GoTriangleRight } from "react-icons/go";

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    flex-direction: column;
    align-items: left;
    color: ${theme.colors.primary};
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 4rem;
  `}
`;

const Row = styled.div`
  display: grid;
  grid-auto-columns: auto 1fr;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 600px) {
    grid-template-areas: "none";
    //grid-template-columns: 1fr;
  }
`;

const ColumnOne = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-area: col1;

  @media screen and (max-width: 600px) {
    flex-direction: row;
    grid-column: auto;
    grid-row: auto;
    overflow: auto;
  }
`;

const ColumnTwo = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  grid-area: col2;
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  line-height: 24px;

  @media screen and (max-width: 600px) {
    grid-column: auto;
    grid-row: auto;
    max-height: 80vh;
    overflow: auto;
  }
`;

const Title = styled.div`
  ${({ theme }) => css`
    margin-bottom: 1rem;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    color: ${theme.colors.secondary};

    @media screen and (max-width: 600px) {
      font-size: 25px;
    }
  `}
`;

const Position = styled.div`
  font-weight: 700;
  display: flex;
  white-space: pre-wrap;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    font-size: 15px;
  }
`;

const Company = styled.div`
  ${({ theme }) => css`
    color: ${({ active }) =>
      active ? theme.colors.secondary : theme.colors.primary};
    padding: 25px;
    cursor: pointer;
    border-left: ${({ active }) =>
      active ? `4px solid ${theme.colors.secondary}` : "1px solid"};

    &:hover {
      color: ${theme.colors.secondary};
    }

    @media screen and (max-width: 600px) {
      font-size: 15px;
      border-left: none;
      border-bottom: ${({ active }) =>
        active ? `4px solid ${theme.colors.secondary}` : "1px solid"};
    }
  `}
`;

const CompanyUrl = styled.div`
  ${({ theme }) => css`
    font-weight: 700;
    display: flex;
    color: ${theme.colors.secondary};
  `}
`;

const Dates = styled.div`
  line-height: 1.1;
  font-size: 14px;
`;

const Summary = styled.div`
  margin: 10px 0;
  font-style: italic;
  padding-top: 10px;
  line-height: 1.2;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const Bullets = styled.div`
  margin-top: 10px;

  @media screen and (max-width: 600px) {
    font-size: 15spx;
    line-height: 1.2;
  }
`;

const Bullet = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const BulletIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.secondary};
    align-self: flex-start;
    margin-top: 0.2rem;
    margin-right: 2rem;

    @media screen and (max-width: 600px) {
      font-size: 15px;
    }
  `}
`;

export default function WorkExperience() {
  const [experience, setExperience] = useState(workExperience[0] || "");
  return (
    <Wrapper>
      <Title>Work Experience</Title>
      <Row>
        <ColumnOne>
          {(workExperience || []).map((item) => {
            return (
              <Company
                key={item.company}
                onClick={() => {
                  setExperience(item);
                }}
                active={experience.company === item.company}
              >
                {item.company}
              </Company>
            ); //update state
          })}
        </ColumnOne>
        <ColumnTwo>
          <Position>
            {experience.position}
            <CompanyUrl>
              {" @ "}
              <TextLink
                title={experience.company}
                url={experience.companyUrl}
              />
            </CompanyUrl>
          </Position>
          <Dates>{experience.textDate}</Dates>
          <Summary>{experience.summary}</Summary>
          <Bullets>
            {(experience.bullets || []).map((bullet, key) => {
              return (
                <Bullet key={key}>
                  <BulletIcon>
                    <GoTriangleRight />
                  </BulletIcon>
                  {bullet}
                </Bullet>
              );
            })}
          </Bullets>{" "}
        </ColumnTwo>
      </Row>
    </Wrapper>
  );
}
