import React from "react";

export default function Form(props) {
  const { name, email, message, submitText } = props;
  //Should this be a modal so when you click email/contact icon, this pop ups?
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "25px",
        flexDirection: "column",
        border: "3px dashed red",
      }}
    >
      <h1>Leave a message</h1>
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        {name && (
          <div>
            <label htmlFor="name">Your Name...please</label> <br />
            <input type="text" id="name" name="name" required />
          </div>
        )}
        {email && (
          <div>
            <label htmlFor="email">Email...only if you want</label> <br />
            <input type="email" id="email" name="email" />
          </div>
        )}
        {message && (
          <div>
            <label htmlFor="message">Message...much appreciated!</label> <br />
            <textarea id="message" name="message" required></textarea>
          </div>
        )}
        <div>
          <input type="submit" value={submitText} />
        </div>
      </form>
    </div>
  );
}
