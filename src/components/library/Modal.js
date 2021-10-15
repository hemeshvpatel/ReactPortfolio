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
    z-index: 1001;
  `}
`;

export default function Modal({ show, children, onClose }) {
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  if (!show) return null;
  return ReactDom.createPortal(
    <Overlay>
      <Container ref={ref}>{children}</Container>
    </Overlay>,
    document.getElementById("portal")
  );
}
