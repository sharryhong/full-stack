import Button from "components/base/button/Button";
import React, { useState, useRef, memo } from "react";
import styles from "./card_add_form.module.css";

const CardAddForm = memo(({ FileInput, addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const onFileChange = (file) => {
    setFile({ fileName: file.name, fileURL: file.url });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    // 사용자가 입력 제출하면 form reset
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    addCard(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        ref={nameRef}
        placeholder="name"
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        ref={companyRef}
        placeholder="company"
      />
      <select
        className={styles.select}
        name="theme"
        ref={themeRef}
        placeholder="theme"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        ref={titleRef}
        placeholder="title"
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        ref={emailRef}
        placeholder="email"
      />
      <textarea
        className={styles.textarea}
        name="message"
        ref={messageRef}
        placeholder="message"
      />
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
});

export default CardAddForm;
