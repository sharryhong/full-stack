import React, { useContext, useRef, useState } from "react";
import { MakerContext } from "store/maker_store";
import Button from "components/base/button/Button";
import styles from "./card-form.module.css";
import ImageFileInput from "components/base/image-file-input/ImageFileInput";

const CardForm = ({ card, editMode }) => {
  const { dispatch } = useContext(MakerContext);
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const themeRef = useRef(null);
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [imageFile, setImageFile] = useState();

  const onAdd = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value || "",
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: imageFile.fileName || "",
      fileURL: imageFile.fileURL || "",
    };
    dispatch({ type: "UPDATE", payload: card });
    formRef.current.reset();
    setImageFile({ fileName: "", fileURL: "" });
  };

  const onChange = (event) => {
    if (!editMode) return;
    const updated = {
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    dispatch({ type: "UPDATE", payload: updated });
  };

  const onDelete = (event) => {
    event.preventDefault();
    dispatch({ type: "DELETE", payload: card.id });
  };

  const onImageChangeEditMode = ({ fileName, fileURL }) => {
    const updated = {
      ...card,
      fileName,
      fileURL,
    };
    dispatch({ type: "UPDATE", payload: updated });
  };

  const onImageChangeAddMode = (file) => {
    setImageFile(file);
  };

  const onImageChange = (file) => {
    if (editMode) onImageChangeEditMode(file);
    onImageChangeAddMode(file);
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
        onChange={onChange}
      />
      <input
        ref={companyRef}
        type="text"
        className={styles.input}
        name="company"
        placeholder="company"
        defaultValue={card?.company}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="theme"
        defaultValue={card?.theme}
        onChange={onChange}
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
        onChange={onChange}
      />
      <input
        ref={emailRef}
        type="text"
        className={styles.input}
        name="email"
        placeholder="email"
        defaultValue={card?.email}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="message"
        defaultValue={card?.message}
        onChange={onChange}
      />
      <div className={styles.buttons}>
        <ImageFileInput
          fileName={editMode ? card?.fileName : imageFile?.fileName}
          onImageChange={onImageChange}
        />
        {editMode && (
          <Button dark onClick={onDelete}>
            Delete
          </Button>
        )}
        {!editMode && (
          <Button primary onClick={onAdd}>
            Add
          </Button>
        )}
      </div>
    </form>
  );
};

export default CardForm;
