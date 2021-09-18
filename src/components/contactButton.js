import React from "react";
import Modal from "./library/modal";

export default function ContactButton() {
  return (
    <div style={{ display: "flex" }}>
      <Modal
        openButtonProps={{
          location: "topRight",
          text: "Contact Me",
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
        style={{ backgroundColor: "lightGrey" }}
      />
    </div>
  );
}
