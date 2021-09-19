import React from "react";
import Modal from "./library/modal";

//Font Awesome
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function ContactButton(props) {
  const { icon, text } = props;
  return (
    <div style={{ display: "flex" }}>
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
    </div>
  );
}
