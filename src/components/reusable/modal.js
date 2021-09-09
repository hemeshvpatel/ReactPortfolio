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
            name={true}
            email={true}
            message={true}
            submitText={"Submit Message"}
          />
        </div>
      )}
    </div>
  );
}
