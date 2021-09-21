import React from "react";
import { projects } from "../data";
import ProjectCard from "./library/projectCard";
import styled from "styled-components";

//Styles
const Wrapper = styled.div`
  display: flex;
  grid-template-columns: auto auto;
  margin: 25px;
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
