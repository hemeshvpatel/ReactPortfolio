import React from "react";
import TextLink from "./textLink";

import styled from "styled-components";

//Style Idea: (hover effect on the entire card)
//Image
//Description
//"View more" button

const Wrapper = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
  border: 3px solid red;
  padding: 10px;
`;

const Image = styled.img`
  width: 100px;
`;

const ImageWrapper = styled.div``;

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
      {imageUrl && (
        <ImageWrapper>
          <Image src="/colorWheel.jpg" alt="Project Pic" />
        </ImageWrapper>
      )}
      {/* {title && <TextWrapper style={titleStyle}>{title}</TextWrapper>}
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
      )} */}
    </Wrapper>
  );
}
