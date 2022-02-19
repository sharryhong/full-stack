import React from "react";
import Button from "components/base/button/Button";
import styles from "./card-form.module.css";

const CardForm = () => {
  return (
    <form className={styles.form}>
      <input
        type="text"
        className={styles.input}
        name="name"
        placeholder="name"
      />
      <input
        type="text"
        className={styles.input}
        name="company"
        placeholder="company"
      />
      <select className={styles.select} name="theme" placeholder="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        type="text"
        className={styles.input}
        name="title"
        placeholder="title"
      />
      <input
        type="text"
        className={styles.input}
        name="email"
        placeholder="email"
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="message"
      />
      <div className={styles.buttons}>
        <input type="file" />
        <Button secondary>Add</Button>
      </div>
    </form>
  );
};

export default CardForm;
