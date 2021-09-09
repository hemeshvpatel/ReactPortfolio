import React from "react";
import { projects } from "../data";
import Card from "../components/reusable/card";

export default function Projects() {
  console.log("projects: ", projects);

  return (
    <div style={{ display: "flex", alignItems: "center", margin: "25px" }}>
      {(projects || []).map((project) => {
        console.log("project: ", project);
        return <Card project={project} />;
      })}
    </div>
  );
}
