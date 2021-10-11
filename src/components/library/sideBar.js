import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link as LinkS } from "react-scroll"; // https://www.npmjs.com/package/react-scroll
import ReactDom from "react-dom";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #808080;
  align-items: center;
  justify-content: space-between;
`;

const MenuItem = styled(LinkS)`
  cursor: pointer;
  color: white;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem calc((100vw-1000px) / 2);
  display: flex;
  margin-left: 2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

  //Hover effects here, Styled Component has its own hover. You can add any more styling inside &:hover
  &:hover {
    color: red;
    text-decoration: underline;
  }

  &.active {
    border-bottom: 3px solid red;
  }
`;

const MenuItemResume = styled.a`
  cursor: pointer;
  color: white;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem calc((100vw-1000px) / 2);
  display: flex;
  margin-left: 2rem;

  //Hover effects here, Styled Component has its own hover. You can add any more styling inside &:hover
  &:hover {
    color: red;
    text-decoration: underline;
  }

  &.active {
    border-bottom: 3px solid red;
  }
`;

const TopRightCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  color: red;
`;

const CloseButton = styled.div`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

export default function SideBar({ sideBarProps, show, onClose }) {
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
      <Wrapper ref={ref}>
        <TopRightCloseButton>
          <CloseButton onClick={onClose}>x</CloseButton>
        </TopRightCloseButton>
        {sideBarProps.map((menu, key) => {
          if (menu.title !== "Resume") {
            return (
              <MenuItem
                key={key}            to={menu.id}
                smooth={true}
                duration={500}
                spy={true}
              >
                {menu.title}{" "}
              </MenuItem>
            );
          }
          if (menu.title === "Resume") {
            return (
              <MenuItemResume
                key={key}
                href={menu.to}
                target={"_blank"}
                rel="noreferrer"
              >
                {menu.title}
              </MenuItemResume>
            );
          }
        })}
      </Wrapper>
    </Overlay>,
    document.getElementById("portal")
  );
}
