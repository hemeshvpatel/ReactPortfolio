import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
`;

//This must be defined above Link in order to work for the hover effect targeting ToolTip
const ToolTip = styled.div`
  ${({ active }) => css`
    transition: color 0.5s;
    color: black;
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
  `}
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: color 0.5s;
  text-decoration: none;
  color: white;
  margin: 25px;
  font-size: 35px;

  &:hover {
    color: red;
  }

  &:hover ${ToolTip} {
    color: red;
  }
`;

export default function ResumeIcon({ to, label, tooltip }) {
  const [active, setActive] = useState(false);
  return (
    <Wrapper>
      <Link
        title="Resume"
        href={to}
        target={"_blank"}
        rel="noreferrer"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <FaRegFilePdf />
        {tooltip && <ToolTip active={active}>{label}</ToolTip>}
      </Link>
    </Wrapper>
  );
}
