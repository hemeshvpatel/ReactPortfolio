import React from "react";

export default function ContactFrom() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "25px",
        flexDirection: "column",
      }}
    >
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <input type="hidden" name="form-name" value="contact" />
        </p>
        <p>
          <label>
            Your name please: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Drop a message: <textarea type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your email (if you want): <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}
