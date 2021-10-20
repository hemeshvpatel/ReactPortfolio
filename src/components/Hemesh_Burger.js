import React from "react";
import styled, { css } from "styled-components";

export const StyledBurger = styled.button`
  //position: absolute;
  //top: 5%;
  //left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  //z-index: 1002;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ show }) => (show ? "red" : "white")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ show }) => (show ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ show }) => (show ? "0" : "1")};
      transform: ${({ show }) => (show ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ show }) => (show ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default function Burger({ show, setShow }) {
  return (
    <StyledBurger show={show} onClick={() => setShow(!show)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
