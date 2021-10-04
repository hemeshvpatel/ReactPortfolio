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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  justify-content: center;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 16rem));
  }
`;

export default function Projects() {
  return (
    <Wrapper>
      {(projects || []).map((project, key) => {
        return <ProjectCard key={key} data={project} />;
      })}
    </Wrapper>
  );
}
