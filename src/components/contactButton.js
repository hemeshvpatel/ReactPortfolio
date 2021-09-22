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
              style: { color: "blue" },
            }}
            //labelProps={{ style: { fontSize: "20px" } }}
            nameProps={{ label: "Your name please ..." }}
            emailProps={{ label: "Email ... only if you want" }}
            contactProps={{ label: "What type of fan are you?" }}
            messageProps={{
              label: "Message ... much appreciated!",
              textAreaStyle: {},
            }}
            submitProps={{
              text: "Submit Message",
              buttonStyle: {
                backgroundColor: "#4CAF50",
                color: "white",
                margin: "10px",
              },
            }}
            onClose={() => {
              console.log("closing");
              setOpenModal(false);
            }}
          />
        </Modal>
      </Wrapper>
    </>
  );
}
