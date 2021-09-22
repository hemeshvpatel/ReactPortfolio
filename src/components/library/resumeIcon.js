import React from "react";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  font-size: 35px;
`;

export default function ResumeIcon(props) {
  const { to } = props;
  return (
    <Wrapper
      style={{
        display: "flex",
        fontSize: "35px",
      }}
    >
      <a
        title="Resume"
        href={to}
        target={"_blank"}
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <FontAwesomeIcon style={{ margin: "15px" }} icon={faFile} />
      </a>
    </Wrapper>
  );
}
