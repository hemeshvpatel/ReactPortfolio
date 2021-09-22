import React from "react";
import TextLink from "./textLink";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: left;
  margin: 25px;
  flex-direction: column;
  border: 3px dashed red;
`;

const TextWrapper = styled.div``;

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

  let titleStyle = { color: "orange" };
  let yearStyle = { color: "purple" };
  let descriptionStyle = { color: "orange" };
  let repositoryUrlStyle = { color: "yellow" };
  let hostedUrlStyle = { color: "blue" };
  let technologiesStyle = { color: "teal" };
  let imageUrlStyle = { color: "teal" };

  //TODO: add image, format card

  return (
    <Wrapper>
      {title && <TextWrapper style={titleStyle}>{title}</TextWrapper>}
      {year && <TextWrapper style={yearStyle}>{year}</TextWrapper>}
      {description && (
        <TextWrapper style={descriptionStyle}>{description}</TextWrapper>
      )}
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
      {technologies && (
        <TextWrapper style={technologiesStyle}>{technologies}</TextWrapper>
      )}
      {imageUrl && <TextWrapper style={imageUrlStyle}>{imageUrl}</TextWrapper>}
    </Wrapper>
  );
}
