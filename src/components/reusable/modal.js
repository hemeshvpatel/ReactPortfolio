import React from "react";
import Form from "../form";

export default function Modal(props) {
  const { isShowing } = props;
  //console.log("isShowing: ", isShowing);

  //Resource for blurring background: https://blog.bitsrc.io/build-a-full-featured-modal-dialog-form-with-react-651dcef6c571

  return (
    <div>
      {isShowing && (
        <div
          style={{
            zIndex: 1000,
            display: "flex",
            position: "fixed",
            left: "50%",
            top: "50%",
            marginTop: "-50px",
            marginLeft: "-100px",
            width: "25%",
            maxHeight: `50%`,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            backgroundColor: "lightGrey",
          }}
        >
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
