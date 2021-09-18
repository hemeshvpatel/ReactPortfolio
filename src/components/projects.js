import React from "react";
import { projects } from "../data";
import ProjectCard from "./library/projectCard";

export default function Projects() {
  //console.log("projects: ", projects);

  //gridTemplateColumns - determines how many rows / columns you have

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        margin: "25px",
      }}
    >
      {(projects || []).map((project, key) => {
        //console.log("project: ", project);
        return <ProjectCard key={key} project={project} />;
      })}
    </div>
  );
}
