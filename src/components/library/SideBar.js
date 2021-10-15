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
  ${({ theme }) => css`
    width: 75vw;
    height: 90vh;
    right: 0;
    background-color: ${theme.colors.tertiary};
    padding: 15px;
    position: fixed;
    border: 2px solid ${theme.colors.secondary};
  `}
`;

const MenuItem = styled(LinkS)`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    align-items: center;
    text-decoration: none;
    padding: 0.5rem calc((100vw-1000px) / 2);
    display: flex;
    margin-left: 7rem;
    margin-top: 4rem;
    margin-bottom: 4rem;

    //Hover effects here, Styled Component has its own hover. You can add any more styling inside &:hover
    &:hover {
      color: ${theme.colors.secondary};
      text-decoration: underline;
    }

    &.active {
      border-bottom: 3px solid ${theme.colors.secondary};
    }
  `}
`;

const MenuItemResume = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    align-items: center;
    text-decoration: none;
    padding: 0.5rem calc((100vw-1000px) / 2);
    display: flex;
    margin-left: 7rem;

    //Hover effects here, Styled Component has its own hover. You can add any more styling inside &:hover
    &:hover {
      color: ${theme.colors.secondary};
      text-decoration: underline;
    }

    &.active {
      border-bottom: 3px solid ${theme.colors.secondary};
    }
  `}
`;

const TopRightCloseButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    color: ${theme.colors.secondary};
  `}
`;

const CloseButton = styled.div`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  padding: 2rem;
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
                key={key}
                to={menu.id}
                smooth={true}
                duration={500}
                spy={true}
                onClick={onClose}
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
          return null;
        })}
      </Wrapper>
    </Overlay>,
    document.getElementById("portal")
  );
}
