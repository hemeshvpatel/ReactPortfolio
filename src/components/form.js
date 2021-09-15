import React from "react";
//import { setNewStyle } from "../globalFunctions";
import * as GlobalFunctions from "../globals/globalFunctions";

//handle select options
//Ability to add labels within input field or above or both
//Form ideas: https://colorlib.com/wp/free-html5-contact-form-templates/
//Close modal button

export default function Form(props) {
  const {
    headerProps,
    labelProps,
    inputProps,
    contactProps,
    nameProps,
    emailProps,
    messageProps,
    submitProps,
  } = props;

  //Default Styles:
  let headerStyle = { margin: "20px", fontSize: "20px" };
  let nameStyle = {
    margin: "10px",
  };
  let emailStyle = {
    margin: "10px",
  };
  let contactStyle = {
    margin: "10px",
  };
  let messageStyle = {
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {headerProps && (
        <div
          style={GlobalFunctions.setNewStyle(headerStyle, headerProps?.style)}
        >
          {headerProps?.text}
        </div>
      )}
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        {nameProps && (
          <div style={GlobalFunctions.setNewStyle(nameStyle, nameProps?.style)}>
            <label
              htmlFor="name"
              style={GlobalFunctions.setNewStyle(labelStyle, labelProps?.style)}
            >
              {nameProps?.label}
              <input
                type="text"
                id="name"
                name="name"
                required
                style={GlobalFunctions.setNewStyle(
                  inputStyle,
                  inputProps?.style
                )}
              />
            </label>
          </div>
        )}
        {emailProps && (
          <div
            style={GlobalFunctions.setNewStyle(emailStyle, emailProps?.style)}
          >
            <label htmlFor="email" style={labelStyle}>
              {emailProps?.label}
              <input
                type="email"
                id="email"
                name="email"
                style={GlobalFunctions.setNewStyle(
                  inputStyle,
                  inputProps?.style
                )}
              />
            </label>
          </div>
        )}
        {contactProps && (
          <div
            style={GlobalFunctions.setNewStyle(
              contactStyle,
              contactProps?.style
            )}
          >
            <label htmlFor="contactType" style={labelStyle}>
              {contactProps?.label}
              <input
                type="text"
                id="contactType"
                name="contactType"
                style={GlobalFunctions.setNewStyle(
                  inputStyle,
                  inputProps?.style
                )}
              />
            </label>
          </div>
        )}
        {messageProps && (
          <div
            style={GlobalFunctions.setNewStyle(
              messageStyle,
              messageProps?.style
            )}
          >
            <label htmlFor="message" style={labelStyle}>
              {messageProps?.label}
              <textarea
                id="message"
                name="message"
                style={GlobalFunctions.setNewStyle(
                  textAreaStyle,
                  messageProps?.textAreaStyle
                )}
                required
              ></textarea>
            </label>
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "row" }}>
          {submitProps && (
            <input
              type="submit"
              value={submitProps?.text || "Submit"}
              style={GlobalFunctions.setNewStyle(
                submitButtonStyle,
                submitProps?.buttonStyle
              )}
            />
          )}
        </div>
      </form>
    </div>
  );
}
