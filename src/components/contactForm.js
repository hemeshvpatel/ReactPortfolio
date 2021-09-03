import React, { useState, useEffect } from "react";

export default function ContactForm() {
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
          <label htmlFor="name">Name</label> <br />
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Email</label> <br />
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="message">Message</label> <br />
          <textarea id="message" name="message" required></textarea>
        </p>
        <p>
          <input type="submit" value="Submit message" />
        </p>
      </form>
    </div>
  );
}
