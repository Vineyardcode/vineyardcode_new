import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';


export default function EmailForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateForm = () => {
    let isValid = true;


    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }


    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!message.trim()) {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }


  const serviceId = "service_xa17euc";
  const templateId = "template_26ii04b";
  const userId = "4vTb-eSCEEagVZlEi";

  emailjs
  .send(serviceId, templateId, {
    from_name: name,
    from_email: email,
    message: message,
  }, userId)
  .then((response) => {
    console.log("Email sent successfully!", response);
    setName("");
    setEmail("");
    setMessage("");
  })
  .catch((error) => {
    console.error("Error sending email:", error);
  });
};

return (
<div className="contact-form">
  <h2>Write me an email</h2>
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Your name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {nameError && <span className="error-message">{nameError}</span>}
    </div>

    <div>
      <label htmlFor="email">Your email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {emailError && <span className="error-message">{emailError}</span>}
    </div>

    <div>
      <label htmlFor="message">Your message</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows="5"
      ></textarea>
      {messageError && <span className="error-message">{messageError}</span>}
    </div>

    <button type="submit">
      <h2>Send</h2>
    </button>
  </form>
</div>
);
}