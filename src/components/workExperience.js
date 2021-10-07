import React, { useState } from "react";
import { workExperience } from "../data";
import TextLink from "./library/textLink";
import styled, { css } from "styled-components";
import { FaCaretRight } from "react-icons/fa";
import { BsCaretRight } from "react-icons/bs";

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
`;

const ColumnTwo = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  grid-area: col2;
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  line-height: 24px;
`;

const Title = styled.div`
  margin-bottom: 25px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  color: white;
`;

const Position = styled.div`
  font-weight: 700;
  display: flex;
  white-space: pre-wrap;
`;

const Company = styled.div`
  color: ${({ active }) => (active ? "red" : "white")};
  padding: 25px;
  cursor: pointer;
  border-left: ${({ active }) => (active ? "4px solid red" : "1px solid")};

  &:hover {
    color: red;
  }
`;

const CompanyUrl = styled.div`
  font-weight: 700;
  display: flex;
  color: red;
`;

const Dates = styled.div`
  line-height: 1.1;
  font-size: 14px;
`;

const Summary = styled.div`
  margin: 10px 0;
  font-style: italic;
  padding-top: 10px;
  line-height: 1.1;
`;

const Bullets = styled.div`
  margin-top: 10px;
`;

const Bullet = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export default function WorkExperience() {
  //Some Ideas:
  //1) Turn this into a timeline with the ability to click and interact, ensure everything has links
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
                  <BsCaretRight style={{ color: "red", marginTop: "5px" }} />
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
