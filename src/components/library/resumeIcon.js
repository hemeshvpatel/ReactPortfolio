import React from "react";
import styled from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  font-size: 35px;
  flex-direction: column;
`;

const Link = styled.a`
  transition: color 0.5s;
  text-decoration: none;
  color: white;

  &:hover {
    color: red;
  }
`;

const Tag = styled.div`
  color: black;

  &:hover {
    font-size: 12px;
    color: red;
  }
`;

export default function ResumeIcon(props) {
  const { to, label } = props;
  return (
    <Wrapper>
      <Link title="Resume" href={to} target={"_blank"} rel="noreferrer">
        <FaRegFilePdf style={{ margin: "15px" }} />
      </Link>
      {/* <Tag>{label}</Tag> */}
    </Wrapper>
  );
}
