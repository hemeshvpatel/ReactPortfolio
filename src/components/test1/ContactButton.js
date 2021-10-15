import React, { useState } from "react";
import Modal from "./library/Modal";
import ContactForm from "./ContactForm";
import styled, { css } from "styled-components";
import { FaHandSpock } from "react-icons/fa";

//Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  ${({ theme }) =>
    css`
      color: ${theme.colors.primary};
      width: auto;
      border: 1px solid red;
      border-radius: 6px;
      padding: 10px;
      cursor: pointer;
      font-weight: 600;
      margin: 20px;

      &:hover {
        color: red;
      }
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
          <FaHandSpock style={{ color: "red" }} /> {text}
        </Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <ContactForm
            formProps={{ style: { border: "3px dashed red" } }}
            headerProps={{
              text: "Get In Touch",
            }}
            //labelProps={{ style: { fontSize: "20px" } }}
            nameProps={{ label: "Name" }}
            emailProps={{ label: "Email" }}
            messageProps={{
              label: "Message",
            }}
            submitProps={{
              text: "Send",
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
