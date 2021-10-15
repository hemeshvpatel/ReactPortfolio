import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ minHeight }) => css`
    min-height: ${minHeight ? minHeight : "100vh"};
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    padding: 2rem;
  `}
`;

export default function Section(props) {
  const { children, id, minHeight } = props;

  return (
    <Wrapper id={id} minHeight={minHeight}>
      {children}
    </Wrapper>
  );
}
