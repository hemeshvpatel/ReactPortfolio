import React from "react";
import { projects } from "../data";
import ProjectCard from "./library/projectCard";
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
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: auto;
  }
`;

export default function Projects() {
  //console.log("projects: ", projects);

  //gridTemplateColumns - determines how many rows / columns you have

  return (
    <Wrapper>
      {(projects || []).map((project, key) => {
        //console.log("project: ", project);
        return <ProjectCard key={key} project={project} />;
      })}
    </Wrapper>
  );
}
