import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  //padding: "25px",
`;

export default function Section(props) {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
}
