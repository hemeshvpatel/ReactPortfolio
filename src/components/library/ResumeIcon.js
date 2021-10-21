import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
`;

//This must be defined above Link in order to work for the hover effect targeting ToolTip
const ToolTip = styled.div`
  ${({ theme, active }) => css`
    transition: color 0.5s;
    color: ${theme.colors.tertiary};
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
  `}
`;

const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: color 0.5s;
    text-decoration: none;
    color: ${theme.colors.primary};
    font-size: 25px;

    &:hover {
      color: ${theme.colors.secondary};
    }

    &:hover ${ToolTip} {
      color: ${theme.colors.secondary};
    }
  `}
`;

export default function ResumeIcon({ to, label, tooltip, icon, text }) {
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
        {text && <Text>{label}</Text>}
        {icon && <FaRegFilePdf />}
        {tooltip && <ToolTip active={active}>{label}</ToolTip>}
      </Link>
    </Wrapper>
  );
}
