import React from "react";
import { workExperience } from "../data";
import TextLink from "./library/textLink";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.primary};
  `}
`;

const WorkExperienceContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Position = styled.div`
  font-weight: 700;
`;

const Location = styled.div``;

const Company = styled.div``;

const CompanyUrl = styled.div``;

const Dates = styled.div``;

const Summary = styled.div`
  margin: 10px;
  font-style: italic;
  width: 60%;
`;

const Bullets = styled.div`
  width: 50%;
`;

const Bullet = styled.div`
  margin: 5px;
`;

export default function WorkExperience() {
  //Some Ideas:
  //1) Turn this into a timeline with the ability to click and interact, ensure everything has links
  return (
    <Wrapper id="experience">
      {(workExperience || []).map((item, key) => {
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
      })}
    </Wrapper>
  );
}
