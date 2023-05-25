import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';


export default function EmailForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  const serviceId = "service_xa17euc";
  const templateId = "template_26ii04b";
  const userId = "4vTb-eSCEEagVZlEi";

    emailjs.send(serviceId, templateId, {
      from_name: name,
      from_email: email,
      message: message,
    }, userId)
      .then((response) => {
        console.log("Email sent successfully!", response);
        // Clear the form fields
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
          
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Your email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Your message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}