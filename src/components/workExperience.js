import React, { useState } from "react";
import { workExperience } from "../data";
import TextLink from "./library/textLink";
import styled, { css } from "styled-components";

//Notes
/*

Idea is making some sort of timeline 

Small Pic of Company
Company Name
Location
Time

Clickable expands into more details / Dropdown carrot:
Description 

//https://brittanychiang.com/#jobs

*Mobile would be a stacked timeline or displayed as cards

*/

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    flex-direction: column;
    align-items: left;
    color: ${theme.colors.primary};
    margin-left: 10px;
    margin-right: 10px;

    /* @media screen and (max-width: 768px) {
      padding: 150px 0px 0px 0px;
    } */
  `}
`;

const Row = styled.div`
  display: grid;
  grid-auto-columns: auto 1fr;
  grid-template-areas: "col1 col2";
`;

const ColumnOne = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: col1;
  border-left: 1px solid red;
`;

const ColumnTwo = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  grid-area: col2;
  display: flex;
  flex-direction: column;
  //border: 1px solid red;
`;

const Title = styled.div`
  margin-bottom: 25px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  color: white;
`;

const WorkExperienceContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Position = styled.div`
  font-weight: 700;
  display: flex;
  white-space: pre-wrap;
`;

const Location = styled.div``;

const Company = styled.div`
  color: white;
  padding: 15px;
  cursor: pointer;
`;

const CompanyUrl = styled.div``;

const Dates = styled.div``;

const Summary = styled.div`
  margin: 10px 0;
  font-style: italic;
`;

const Bullets = styled.div``;

const Bullet = styled.div`
  margin: 5px;
`;

export default function WorkExperience() {
  //Some Ideas:
  //1) Turn this into a timeline with the ability to click and interact, ensure everything has links

  //Design

  // submenu on the left
  // display section on the right

  const [experience, setExperience] = useState(workExperience[0] || "");

  return (
    <Wrapper>
      <Title>Where I've Worked</Title>
      <Row>
        <ColumnOne>
          {(workExperience || []).map((item) => {
            return (
              <Company
                key={item.company}
                onClick={() => {
                  setExperience(item);
                }}
              >
                {item.company}
              </Company>
            ); //update state
          })}
        </ColumnOne>
        <ColumnTwo>
          <Position>
            {experience.position}
            {" @ "}
            <TextLink title={experience.company} url={experience.companyUrl} />
          </Position>
          <Dates>
            {experience.startDate} to {experience.endDate}
          </Dates>
          <Summary>{experience.summary}</Summary>
          <Bullets>
            {" "}
            {(experience.bullets || []).map((bullet, key) => {
              //console.log("each bullet: ", bullet)
              return <Bullet key={key}>•{bullet}</Bullet>;
            })}
          </Bullets>{" "}
        </ColumnTwo>
      </Row>
      {/* {(workExperience || []).map((item, key) => {
        const {
          company,
          companyUrl,
          location,
          position,
          startDate,
          endDate,
          summary,
          bullets,
        } = item;
        return (
          <WorkExperienceContainer key={key}>
            <Position>{position}</Position>
            <Company>
              <TextLink company={company} companyUrl={companyUrl} />
            </Company>
            <Location> {location}</Location>
            <CompanyUrl>{companyUrl}</CompanyUrl>
            <Dates>
              {startDate} to {endDate}
            </Dates>
            <Summary>{summary}</Summary>
            <Bullets>
              {" "}
              {(bullets || []).map((bullet, key) => {
                //console.log("each bullet: ", bullet)
                return <Bullet key={key}>•{bullet}</Bullet>;
              })}
            </Bullets>{" "}
          </WorkExperienceContainer>
        );
      })} */}
    </Wrapper>
  );
}
