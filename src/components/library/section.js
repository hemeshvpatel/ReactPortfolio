import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;

export default function Section(props) {
  const { children, id } = props;

  return <Wrapper id={id}>{children}</Wrapper>;
}
