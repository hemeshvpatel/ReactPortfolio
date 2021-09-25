import React, { useState } from "react";
import Modal from "./library/modal";
import ContactForm from "./contactForm";
import styled, { css } from "styled-components";

//Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  ${({ theme }) =>
    css`
      background-color: blue;
      color: ${theme.colors.primary};
      width: auto;
      border: none;
      border-radius: 6px;
      padding: 10px;
      cursor: pointer;
      align-content: center;
      font-weight: 600;
    `}
`;

export default function ContactButton(props) {
  const { text } = props;
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Wrapper>
        <Button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          {text}
        </Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <ContactForm
            formProps={{ style: { border: "3px dashed red" } }}
            headerProps={{
              text: "Leave a message",
            }}
            //labelProps={{ style: { fontSize: "20px" } }}
            nameProps={{ label: "Name" }}
            emailProps={{ label: "Email" }}
            messageProps={{
              label: "Message",
            }}
            submitProps={{
              text: "Send Message",
            }}
            onClose={() => {
              setOpenModal(false);
            }}
          />
        </Modal>
      </Wrapper>
    </>
  );
}
