import React, { useState } from "react";
import Form from "../form";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.div``;

const FormWrapper = styled.div`
  z-index: 1000;
  display: flex;
  position: fixed;
  left: 40%;
  top: 40%;
  margin-top: -50px;
  margin-left: -100px;
  width: 25%;
  max-height: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: grey;
`;

export default function Modal(props) {
  const [isShowing, setIsShowing] = useState(false);

  const { closeButtonProps, openButtonProps, style } = props;

  //A function to open and close the modal
  const toggle = () => {
    setIsShowing(!isShowing);
  };

  // let defaultStyle = {
  //   zIndex: 1000,
  //   display: "flex",
  //   position: "fixed",
  //   left: "40%",
  //   top: "40%",
  //   marginTop: "-50px",
  //   marginLeft: "-100px",
  //   width: "25%",
  //   maxHeight: `50%`,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   overflow: "hidden",
  //   backgroundColor: "grey",
  // };

  //console.log("isShowing: ", isShowing);

  //Resource for blurring background: https://blog.bitsrc.io/build-a-full-featured-modal-dialog-form-with-react-651dcef6c571

  //This is the style got removed
  //style={GlobalFunctions.setNewStyle(defaultStyle, style)}

  return (
    <Wrapper>
      <Button
        onClick={toggle}
        variant="contained"
        style={openButtonProps.style}
      >
        {openButtonProps.text}
      </Button>
      {isShowing && (
        <FormWrapper>
          {closeButtonProps && (
            <Button onClick={toggle} style={closeButtonProps.style}>
              {closeButtonProps.text}
            </Button>
          )}
          <Form
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
              textAreaStyle: { backgroundColor: "red" },
            }}
            submitProps={{
              text: "Submit Message",
              buttonStyle: {
                backgroundColor: "#4CAF50",
                color: "white",
                margin: "10px",
              },
            }}
          />
        </FormWrapper>
      )}
    </Wrapper>
  );
}
