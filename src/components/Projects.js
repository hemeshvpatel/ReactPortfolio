import React from "react";
import { projects } from "../data";
import ProjectCard from "./library/ProjectCard";
import styled from "styled-components";

//Notes
/*

Main pic would may be a short video of a feature
Smaller pic might be main tech used
Project Name
Tech Stack
(Clickable takes you to hosting link or if not hosted github)

Dropdown carrot:
Description 
Live Link: Host link
Repository Link: Repo Link

Appears as a Carousel on full web with toggle for cards
Mobile appears as cards stacked

*/

//Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 4rem;
`;

const ProjectsContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 16rem));
  }
`;

const Title = styled.div`
  margin-bottom: 1rem;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  color: red;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

export default function Projects() {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <ProjectsContainer>
        {(projects || []).map((project, key) => {
          return <ProjectCard key={key} data={project} />;
        })}
      </ProjectsContainer>
    </Wrapper>
  );
}
