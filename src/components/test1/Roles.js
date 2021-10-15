import React from "react";
import { roles } from "../data";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    white-space: pre-wrap;
    color: ${theme.colors.primary};
  `}
`;

export default function Roles() {
  //console.log("roles: ", roles);

  return (
    <Wrapper>
      {`Roles I'm interested in: `}
      {(roles || []).map((role, key) => {
        //console.log("role: ", role)
        return (
          <div key={key}>
            {key ? `, ` : null}
            {role}
          </div>
        );
      })}
    </Wrapper>
  );
}
