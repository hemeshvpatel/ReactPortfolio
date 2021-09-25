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
  margin: 20px;
`;
const Email = styled.div`
  margin: 20px;
`;
const Message = styled.div`
  margin: 20px;
`;

const Header = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    text-align: center;
    color: black;
    font-size: 30px;
    font-weight: 700;
    margin: 20px;
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

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 15;
  color: black;
`;

const Input = styled.input`
  font-size: 25px;
`;

const TextArea = styled.textarea`
  font-size: 25px;
`;

const Body = styled.div`
  ${({ theme }) => css`
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
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

const Button = styled.input`
  ${({ theme }) => css`
    width: 150px;
    height: 45px;
    margin: 20px;
    border: none;
    background-color: green;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  `}
`;

export default function ContactForm(props) {
  const {
    headerProps,
    nameProps,
    emailProps,
    messageProps,
    submitProps,
    onClose,
  } = props;

  return (
    <Wrapper>
      <TopRightCloseButton>
        <CloseButton onClick={onClose}>x</CloseButton>
      </TopRightCloseButton>
      {headerProps && <Header>{headerProps?.text} </Header>}
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        {nameProps && (
          <Name>
            <Label htmlFor="name">
              {nameProps?.label}
              <Input type="text" id="name" name="name" required />
            </Label>
          </Name>
        )}
        {emailProps && (
          <Email>
            <Label htmlFor="email">
              {emailProps?.label}
              <Input type="email" id="email" name="email" />
            </Label>
          </Email>
        )}
        {messageProps && (
          <Message>
            <Label htmlFor="message">
              {messageProps?.label}
              <TextArea id="message" name="message" required />
            </Label>
          </Message>
        )}
        <Footer>
          {submitProps && (
            <Button type="submit" value={submitProps?.text || "Submit"} />
          )}
        </Footer>
      </form>
    </Wrapper>
  );
}
