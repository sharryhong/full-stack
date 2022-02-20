import React, { useContext, useRef } from "react";
import { MakerContext } from "store/maker_store";
import Button from "components/base/button/Button";
import styles from "./card-form.module.css";

const CardForm = ({ card, editMode }) => {
  const { dispatch } = useContext(MakerContext);
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const themeRef = useRef(null);
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleAdd = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value || "",
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    dispatch({ type: "ADD", payload: card });
    formRef.current.reset();
  };

  const onDelete = (event) => {
    event.preventDefault();
    dispatch({ type: "DELETE", payload: card.id });
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        type="text"
        className={styles.input}
        name="name"
        placeholder="name"
        defaultValue={card?.name}
      />
      <input
        ref={companyRef}
        type="text"
        className={styles.input}
        name="company"
        placeholder="company"
        defaultValue={card?.company}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="theme"
        defaultValue={card?.theme}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        ref={titleRef}
        type="text"
        className={styles.input}
        name="title"
        placeholder="title"
        defaultValue={card?.title}
      />
      <input
        ref={emailRef}
        type="text"
        className={styles.input}
        name="email"
        placeholder="email"
        defaultValue={card?.email}
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="message"
        defaultValue={card?.message}
      />
      <div className={styles.buttons}>
        <input type="file" />
        {editMode && (
          <Button secondary onClick={onDelete}>
            Delete
          </Button>
        )}
        {!editMode && <Button onClick={handleAdd}>Add</Button>}
      </div>
    </form>
  );
};

export default CardForm;
