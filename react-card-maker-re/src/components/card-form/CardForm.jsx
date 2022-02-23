import React, {
  memo,
  useCallback,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
import classNames from "classnames/bind";
import { MakerDispatchContext } from "store/maker_store";
import Button from "components/base/button/Button";
import styles from "./card-form.module.css";
import ImageFileInput from "components/base/image-file-input/ImageFileInput";
import * as cardApi from "service/card_service";
import { SessionContext } from "context/session_provider.js";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

const CardForm = memo(({ card, editMode }) => {
  const dispatch = useContext(MakerDispatchContext);
  const { userId } = useContext(SessionContext);
  const location = useLocation();
  const [isUserDataPage, setIsUserDataPage] = useState(false);

  const formRef = useRef(null);
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const themeRef = useRef(null);
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [imageFile, setImageFile] = useState({});
  const [valid, setValid] = useState({});

  const checkValid = useCallback(
    (key, value) => {
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
    },
    [valid]
  );

  const onAdd = useCallback(
    (event) => {
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

      formRef.current.reset();
      setImageFile({ fileName: "", fileURL: "" });

      if (isUserDataPage && userId) {
        cardApi.saveCard(userId, card, () => {
          dispatch({ type: "UPDATE", payload: card });
        });
        return;
      }
      dispatch({ type: "UPDATE", payload: card });
    },
    [
      checkValid,
      dispatch,
      imageFile?.fileName,
      imageFile?.fileURL,
      isUserDataPage,
      userId,
    ]
  );

  const onChange = (event) => {
    const key = event.currentTarget.name;
    const value = event.currentTarget.value;

    const isValid = checkValid(key, value);
    if (isValid) return;

    if (!editMode) return;

    const updated = {
      ...card,
      [key]: value,
    };

    if (isUserDataPage && userId) {
      cardApi.saveCard(userId, updated, (card) => {
        dispatch({ type: "UPDATE", payload: card });
      });
      return;
    }
    dispatch({ type: "UPDATE", payload: updated });
  };

  const onDelete = useCallback(
    (event) => {
      event.preventDefault();

      if (isUserDataPage && userId) {
        cardApi.deleteCard(userId, card, (card) => {
          dispatch({ type: "DELETE", payload: card });
          return;
        });
      }
      dispatch({ type: "DELETE", payload: card.id });
    },
    [card, isUserDataPage, userId]
  );

  const onImageChangeEditMode = useCallback(
    ({ fileName, fileURL }) => {
      const updated = {
        ...card,
        fileName,
        fileURL,
      };
      dispatch({ type: "UPDATE", payload: updated });
    },
    [card]
  );

  const onImageChangeAddMode = useCallback((file) => {
    setImageFile(file);
  }, []);

  const onImageChange = useCallback(
    (file) => {
      if (editMode) onImageChangeEditMode(file);
      onImageChangeAddMode(file);
    },
    [editMode, onImageChangeAddMode, onImageChangeEditMode]
  );

  useEffect(() => {
    setIsUserDataPage(location.pathname.includes("maker"));
  }, [location.pathname]);

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
});

export default CardForm;
