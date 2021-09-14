import React, { useState } from "react";
import Form from "../form";
import { Button } from "@material-ui/core";

export default function Modal(props) {
  const [isShowing, setIsShowing] = useState(false);

  const { closeButtonProps, openButtonProps, style } = props;

  let defaultStyle = {
    zIndex: 1000,
    display: "flex",
    position: "fixed",
    left: "40%",
    top: "40%",
    marginTop: "-50px",
    marginLeft: "-100px",
    width: "25%",
    maxHeight: `50%`,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "grey",
  };

  //A function that gives the ability to override the default style with one passed in through props
  const setNewStyle = (defaultStyle, newStyle = {}) => {
    return (defaultStyle = { ...defaultStyle, ...newStyle });
  };

  //A function to open and close the modal
  const toggle = () => {
    setIsShowing(!isShowing);
  };

  //console.log("isShowing: ", isShowing);

  //Resource for blurring background: https://blog.bitsrc.io/build-a-full-featured-modal-dialog-form-with-react-651dcef6c571

  //Toggle Fxn

  //return
  //True: modal (onclick that toggles as false)
  //False: button "Contact Me" (onclick that toggles true)

  //close / open ButtonProps logic
  //location

  return (
    <div>
      <Button
        onClick={toggle}
        variant="contained"
        style={openButtonProps.style}
      >
        {openButtonProps.text}
      </Button>
      {isShowing && (
        <div style={setNewStyle(defaultStyle, style)}>
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
        </div>
      )}
    </div>
  );
}
