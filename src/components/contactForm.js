import React from "react";

export default function ContactForm() {
  //Should this be a modal so when you click email/contact icon, this pop ups?
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "25px",
        flexDirection: "column",
      }}
    >
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Your Name...please</label> <br />
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Email...only if you want</label> <br />
          <input type="email" id="email" name="email" />
        </p>
        <p>
          <label htmlFor="message">Message...much appreciated!</label> <br />
          <textarea id="message" name="message" required></textarea>
        </p>
        <p>
          <input type="submit" value="Submit message" />
        </p>
      </form>
    </div>
  );
}
