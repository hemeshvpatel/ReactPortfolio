import React from "react";
import Modal from "./library/modal";
import styled from "styled-components";

//Styles
const Wrapper = styled.div`
  display: flex;
`;

export default function ContactButton(props) {
  const { text } = props;
  return (
    <Wrapper>
      <Modal
        openButtonProps={{
          location: "topRight",
          text: text,
          style: {
            color: "white",
            backgroundColor: "blue",
            fontWeight: 400,
          },
        }}
        closeButtonProps={{
          location: "topRight",
          text: "X",
          style: { backgroundColor: "red" },
        }}
        style={{ backgroundColor: "white" }}
      />
    </Wrapper>
  );
}
