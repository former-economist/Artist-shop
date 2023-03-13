import React, { Fragment } from "react";
import { Form } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <Fragment>
      <Form method="post" className={`${styles.form}`}>
        <p>
          <label htmlFor="emil">Email</label>
          <input type="email" name="email" id="email" placeholder="your_email@provider.com" required/>
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="password" required/>
        </p>
        <div className={`${styles.actions}`}>
          <button type="submit">Login</button>
        </div>
      </Form>
    </Fragment>
  );
};

export default LoginForm;
