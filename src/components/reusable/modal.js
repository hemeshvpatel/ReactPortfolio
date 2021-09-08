import React from "react";
import ContactForm from "../contactForm";

export default function Modal(props) {
  const { isShowing } = props;
  console.log("isShowing: ", isShowing);

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
            width: "50%",
            maxHeight: `50%`,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            backgroundColor: "lightGrey",
          }}
        >
          <ContactForm />
        </div>
      )}
    </div>
  );
}
