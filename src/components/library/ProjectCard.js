import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TechnologiesIcons from "../TechnologiesIcons";

const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.tertiary};
    border-radius: 0.2rem;
    //min-width: 20rem;
    display: flex;
    background-color: ${theme.colors.primary};

    &:hover {
      transform: scale(1.05);
      transition: 0.3s;
    }

    @media screen and (min-width: 600px) {
      flex-direction: column;
      text-align: center;
      min-width: 14rem;
    }
  `}
`;

const Image = styled.img`
  width: 0rem;
  height: 0rem;
  object-fit: cover;
  border-radius: 0.2rem;

  @media screen and (min-width: 600px) {
    width: 100%;
    height: 12rem;
  }
`;

const Body = styled.div`
  margin: 1rem;
  flex-grow: 1;
`;

const Title = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;

  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.div`
  line-height: 1.2rem;
`;

const Technologies = styled.div`
  font-size: 0.5rem;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  color: black;

  @media screen and (min-width: 600px) {
    font-size: 1rem;
  }
`;

//This must be defined above Link in order to work for the hover effect targeting ToolTip
const ToolTip = styled.div`
  ${({ theme, active }) => css`
    transition: color 0.5s;
    color: ${theme.colors.tertiary};
    font-size: 15px;
    font-weight: 600;
  `}
`;

const Buttons = styled.div`
  border-top: 1px solid red;
  display: flex;
  margin-top: 1rem;
`;

const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    background-color: transparent;
    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
    color: inherit;
    width: 100%;
    padding-top: 1rem;
    cursor: pointer;
    transition: color 0.5s;

    &:hover {
      color: ${theme.colors.secondary};
    }

    &:hover ${ToolTip} {
      color: ${theme.colors.secondary};
    }

    @media screen and (min-width: 600px) {
      font-size: 2rem;
    }
  `}
`;

//Tutorial Links:
//https://www.youtube.com/watch?v=3_gakM-y7hE

export default function ProjectCard({ data }) {
  const {
    title,
    description,
    repositoryUrl,
    hostedUrl,
    technologies,
    imageUrl,
  } = data;

  const [active, setActive] = useState(false);

  //Need to use process.env.PUBLIC_URL in order for react to access public folder

  return (
    <Wrapper>
      <Image src={process.env.PUBLIC_URL + imageUrl} />
      <Body>
        <Title>{title}</Title>
        <Technologies>
          <TechnologiesIcons technologies={technologies} tooltip={true} />
        </Technologies>
        <Description>{description}</Description>
        <Buttons>
          <Button onClick={() => window.open(repositoryUrl, "_blank").focus()}>
            <FaGithub />
            <ToolTip active={active}>Github</ToolTip>
          </Button>
          <Button
            onClick={() => window.open(hostedUrl, "_blank").focus()}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            <FaExternalLinkAlt />
            <ToolTip active={active}>See Project</ToolTip>
          </Button>
        </Buttons>
      </Body>
    </Wrapper>
  );
}
