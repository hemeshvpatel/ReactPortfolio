import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  //color: white;
  //text-decoration: underline;
  cursor: pointer;
`;

export default function Link(props) {
  const { title, url } = props;
  //console.log("props: ", title, url, style);

  return (
    <Wrapper onClick={() => window.open(url, "_blank").focus()}>
      {title}
    </Wrapper>
  );
}
