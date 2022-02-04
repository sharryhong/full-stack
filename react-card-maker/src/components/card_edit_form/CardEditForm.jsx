import Button from "components/base/button/Button";
import React, { useRef } from "react";
import styles from "./card_edit.module.css";

const CardEditForm = ({ FileInput, card, deleteCard, updateCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { name, company, title, email, message, fileName, theme } = card;

  const onSubmit = (event) => {
    event.preventDefault();
    deleteCard(card.id);
  };
  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
        ref={nameRef}
        defaultValue={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        placeholder="company"
        ref={companyRef}
        defaultValue={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        placeholder="theme"
        ref={themeRef}
        defaultValue={theme}
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="title"
        ref={titleRef}
        defaultValue={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder="email"
        ref={emailRef}
        defaultValue={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="message"
        ref={messageRef}
        defaultValue={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
