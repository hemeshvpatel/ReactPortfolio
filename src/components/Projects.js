import React from "react";
import { projects } from "../data";
import ProjectCard from "./library/ProjectCard";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 10px;
  margin-right: 10px; */
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
