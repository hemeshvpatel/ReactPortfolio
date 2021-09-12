import React from "react";
//handle select options

export default function Form(props) {
  const {
    headerProps,
    contactProps,
    nameProps,
    emailProps,
    messageProps,
    submitProps,
  } = props;
  let headerStyle = { margin: "20px", fontSize: "20px" };
  if (headerProps && headerProps.style) {
    headerStyle = { ...headerStyle, ...headerProps.style };
  }
  let fieldStyle = {
    margin: "10px",
  };
  let labelStyle = {
    display: "flex",
    flexDirection: "column",
    fontWeight: 700,
    fontSize: "10px",
  };
  let inputStyle = {};
  let textAreaStyle = {};
  let submitButtonStyle = {};
  if (submitProps && submitProps.buttonStyle) {
    submitButtonStyle = { ...submitButtonStyle, ...submitProps.buttonStyle };
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {headerProps && <div style={headerStyle}>{headerProps.text}</div>}
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        {nameProps && (
          <div style={fieldStyle}>
            <label htmlFor="name" style={labelStyle}>
              {nameProps.label}
              <input type="text" id="name" name="name" required />
            </label>
          </div>
        )}
        {emailProps && (
          <div style={fieldStyle}>
            <label htmlFor="email" style={labelStyle}>
              {emailProps.label}
              <input type="email" id="email" name="email" />
            </label>
          </div>
        )}
        {contactProps && (
          <div style={fieldStyle}>
            <label htmlFor="contactType" style={labelStyle}>
              {contactProps.label}
              <input type="text" id="contactType" name="contactType" />
            </label>
          </div>
        )}
        {messageProps && (
          <div style={fieldStyle}>
            <label htmlFor="message" style={labelStyle}>
              {messageProps.label}
              <textarea id="message" name="message" required></textarea>
            </label>
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "row" }}>
          {submitProps && (
            <input
              type="submit"
              value={submitProps.text || "Submit"}
              style={submitButtonStyle}
            />
          )}
        </div>
      </form>
    </div>
  );
}
