import React, { useContext, useRef, useState } from "react";
import classNames from "classnames/bind";
import { MakerContext } from "store/maker_store";
import Button from "components/base/button/Button";
import styles from "./card-form.module.css";
import ImageFileInput from "components/base/image-file-input/ImageFileInput";

const cx = classNames.bind(styles);

const CardForm = ({ card, editMode }) => {
  const { dispatch } = useContext(MakerContext);
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const themeRef = useRef(null);
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [imageFile, setImageFile] = useState({});
  const [valid, setValid] = useState({});

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
      fileName: imageFile?.fileName || "",
      fileURL: imageFile?.fileURL || "",
    };

    const isValid = checkValid("name", nameRef.current.value);
    if (isValid) return;

    dispatch({ type: "UPDATE", payload: card });
    formRef.current.reset();
    setImageFile({ fileName: "", fileURL: "" });
  };

  const checkValid = (key, value) => {
    switch (key) {
      case "name": {
        if (value.length < 2) {
          setValid({ ...valid, name: "2자 이상 입력해주세요." });
          nameRef.current.focus();
          return true;
        }
        return setValid({ ...valid, name: "" });
      }
      default:
        return;
    }
  };

  const onChange = (event) => {
    const key = event.currentTarget.name;
    const value = event.currentTarget.value;

    checkValid(key, value);

    if (!editMode) return;

    const updated = {
      ...card,
      [key]: value,
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
      <ul className={styles.list}>
        <li className={styles.item}>
          <input
            ref={nameRef}
            type="text"
            className={cx({ input: true, error: valid.name })}
            name="name"
            placeholder="name"
            defaultValue={card?.name}
            onChange={onChange}
          />
          <span className={styles.valid}>{valid.name}</span>
        </li>
        <li className={styles.item}>
          <input
            ref={companyRef}
            type="text"
            className={styles.input}
            name="company"
            placeholder="company"
            defaultValue={card?.company}
            onChange={onChange}
          />
        </li>
        <li className={styles.item}>
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
        </li>
        <li className={styles.item_half}>
          <input
            ref={titleRef}
            type="text"
            className={styles.input}
            name="title"
            placeholder="title"
            defaultValue={card?.title}
            onChange={onChange}
          />
        </li>
        <li className={styles.item_half}>
          <input
            ref={emailRef}
            type="text"
            className={styles.input}
            name="email"
            placeholder="email"
            defaultValue={card?.email}
            onChange={onChange}
          />
        </li>
        <li className={styles.item_half}>
          <textarea
            ref={messageRef}
            className={styles.textarea}
            name="message"
            placeholder="message"
            defaultValue={card?.message}
            onChange={onChange}
          />
        </li>
      </ul>
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
