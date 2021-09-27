import React from "react";
import styled from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";

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
        <FaRegFilePdf style={{ margin: "15px" }} />
      </a>
    </Wrapper>
  );
}
