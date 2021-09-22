import React from "react";
//import { setNewStyle } from "../globalFunctions";
import * as GlobalFunctions from "../globals/globalFunctions";
import styled, { css } from "styled-components";

//handle select options
//Ability to add labels within input field or above or both
//Form ideas: https://colorlib.com/wp/free-html5-contact-form-templates/
//Close modal button

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    //color: ${theme.colors.primary};
  `}
`;
const Name = styled.div`
  margin: 10px;
`;
const Email = styled.div`
  margin: 10px;
`;
const Contact = styled.div`
  margin: 10px;
`;
const Message = styled.div`
  margin: 10px;
`;

const Header = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    text-align: center;
    margin-top: 10px;
    color: black;
    font-size: 25px;
  `}
`;

const TopRightCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  color: black;
`;

const CloseButton = styled.div`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

const Body = styled.div`
  ${({ theme }) => css`
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
    color: black;
  `}
`;

const Footer = styled.div`
  ${({ theme }) => css`
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

const Button = styled.div`
  ${({ theme }) => css`
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  `}
`;

export default function ContactForm(props) {
  const {
    headerProps,
    //labelProps,
    //inputProps,
    contactProps,
    nameProps,
    emailProps,
    messageProps,
    submitProps,
    onClose,
  } = props;

  let labelStyle = {
    display: "flex",
    flexDirection: "column",
    fontWeight: 700,
    fontSize: "10px",
    color: "black",
  };

  let inputStyle = { background: "white" };
  let textAreaStyle = { background: "white" };
  let submitButtonStyle = {
    color: "white",
    backgroundColor: "blue",
    fontWeight: 400,
  };

  return (
    <Wrapper>
      {headerProps && (
        <Header>
          <TopRightCloseButton>
            <CloseButton onClick={onClose}>X</CloseButton>
          </TopRightCloseButton>
          {headerProps?.text}{" "}
        </Header>
      )}
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        {nameProps && (
          <Name>
            <label htmlFor="name" style={labelStyle}>
              {nameProps?.label}
              <input
                type="text"
                id="name"
                name="name"
                required
                style={inputStyle}
              />
            </label>
          </Name>
        )}
        {emailProps && (
          <Email>
            <label htmlFor="email" style={labelStyle}>
              {emailProps?.label}
              <input type="email" id="email" name="email" style={inputStyle} />
            </label>
          </Email>
        )}
        {contactProps && (
          <Contact>
            <label htmlFor="contactType" style={labelStyle}>
              {contactProps?.label}
              <input
                type="text"
                id="contactType"
                name="contactType"
                style={inputStyle}
              />
            </label>
          </Contact>
        )}
        {messageProps && (
          <Message>
            <label htmlFor="message" style={labelStyle}>
              {messageProps?.label}
              <textarea
                id="message"
                name="message"
                style={GlobalFunctions.setNewStyle(
                  textAreaStyle,
                  messageProps?.textAreaStyle
                )}
                required
              ></textarea>
            </label>
          </Message>
        )}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {submitProps && (
            <input
              type="submit"
              value={submitProps?.text || "Submit"}
              style={GlobalFunctions.setNewStyle(
                submitButtonStyle,
                submitProps?.buttonStyle
              )}
            />
          )}
        </div>
      </form>
    </Wrapper>
  );
}
