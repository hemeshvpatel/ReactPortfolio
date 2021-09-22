import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import ReactDom from "react-dom";

//Styles
const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  `}
`;

const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 50px;
    z-index: 1000;
  `}
`;

export default function Modal({ show, children, onClose }) {
  const outside = useRef();
  // const handleClick = (e) => {
  //   if (outside.current.contains(e.target)) {
  //     return;
  //   }
  //   console.log("close");
  //   onClose();
  // };
  // useEffect(() => {
  //   const getClick = document.addEventListener("click", handleClick);
  //   return () => {
  //     getClick();
  //   };
  // }, []);

  if (!show) return null;
  return ReactDom.createPortal(
    <Overlay ref={outside}>
      <Container>{children}</Container>
    </Overlay>,
    document.getElementById("portal")
  );
}
