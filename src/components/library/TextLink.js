import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: red;
  //text-decoration: underline;
  cursor: pointer;
`;

export default function TextLink({ title, url }) {
  return (
    <Wrapper onClick={() => window.open(url, "_blank").focus()}>
      {title}
    </Wrapper>
  );
}
