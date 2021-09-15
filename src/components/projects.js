import React from "react";
import { projects } from "../data";
import Card from "../components/reusable/card";

export default function Projects() {
  console.log("projects: ", projects);

  //gridTemplateColumns - determines how many rows / columns you have

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        margin: "25px",
      }}
    >
      {(projects || []).map((project) => {
        console.log("project: ", project);
        return <Card project={project} />;
      })}
    </div>
  );
}
