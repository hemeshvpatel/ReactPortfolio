import React from "react";
import styled, { css } from "styled-components";
import * as FontAwesomeIcons from "react-icons/fa";
import * as DevIcons from "react-icons/di";

const Wrapper = styled.div`
  ${({ color }) =>
    css`
      color: ${color};
    `}
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

export default function Icon({ family, iconName }) {
  //console.log("iconName: ", iconName);
  const icon = React.createElement(DevIcons[iconName]);
  //console.log(icon);
  return <Wrapper>{icon}</Wrapper>;
}
