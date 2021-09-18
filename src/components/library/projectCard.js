import React from "react";
import TextLink from "./textLink";

export default function Card(props) {
  const {
    title,
    year,
    description,
    repositoryUrl,
    hostedUrl,
    technologies,
    imageUrl,
  } = props.project;

  let titleStyle = { color: "red" };
  let yearStyle = { color: "purple" };
  let descriptionStyle = { color: "orange" };
  let repositoryUrlStyle = { color: "yellow" };
  let hostedUrlStyle = { color: "blue" };
  let technologiesStyle = { color: "teal" };
  let imageUrlStyle = { color: "teal" };

  //TODO: add image, format card

  return (
    <div
      style={{
        display: "flex",
        alignItems: "left",
        margin: "25px",
        flexDirection: "column",
        border: "3px dashed red",
      }}
    >
      {title && <div style={titleStyle}>{title}</div>}
      {year && <div style={yearStyle}>{year}</div>}
      {description && <div style={descriptionStyle}>{description}</div>}
      {repositoryUrl && (
        <TextLink
          title={"Repository Url"}
          url={repositoryUrl}
          style={repositoryUrlStyle}
        />
      )}
      {hostedUrl && (
        <TextLink
          title={"Hosted TextLink"}
          url={hostedUrl}
          style={hostedUrlStyle}
        />
      )}
      {technologies && <div style={technologiesStyle}>{technologies}</div>}
      {imageUrl && <div style={imageUrlStyle}>{imageUrl}</div>}
    </div>
  );
}
