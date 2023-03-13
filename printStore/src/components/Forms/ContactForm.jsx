import React from "react";
import { Form } from "react-router-dom";
import styles from "./Form.module.css";
const ContactForm = () => {
  return (
    <Form className={`${styles.form}`}>
      <p>
        <label htmlFor="fname">Firstname</label>
        <input
          type="text"
          name="firstname"
          id="fname"
          placeholder="First name"
        />
      </p>
      <p>
        <label htmlFor="lname">Lastname</label>
        <input type="text" name="lastname" id="lname" placeholder="Last name" />
      </p>
      <p>
        <label htmlFor="email">E-mail address</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="your_email@provider.com"
        />
      </p>
      <p>
        <label htmlFor="msg">Message</label>
        <textarea name="message" id="msg" placeholder="Your message"></textarea>
      </p>
      <div className={`${styles.actions}`}>
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
};

export default ContactForm;
