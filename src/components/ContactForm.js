import React from "react";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    border: 2px solid ${theme.colors.secondary};
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
    color: ${theme.colors.primary};
    font-size: 30px;
    font-weight: 700;
    margin: 20px;
  `}
`;

const TopRightCloseButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    color: ${theme.colors.tertiary};
    margin: 20px;
  `}
`;

const CloseButton = styled.div`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: ${theme.colors.secondary};
  `}
`;

const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 1rem;
    color: ${theme.colors.secondary};
  `}
`;

const Input = styled.input`
  font-size: 25px;
`;

const TextArea = styled.textarea`
  font-size: 25px;
`;

const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.input`
  ${({ theme }) => css`
    width: 150px;
    height: 45px;
    margin: 20px;
    border: none;
    background-color: ${theme.colors.tertiary};
    border: 2px solid ${theme.colors.secondary};
    color: ${theme.colors.primary};
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.secondary};
    }
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
