import React, { useRef, useContext } from "react";
import Button from "../button/Button";
import styles from "./habit-add-form.module.css";
import { HabitContext } from "App.jsx";

const HabitAddForm = () => {
  const { dispatch } = useContext(HabitContext);

  const formRef = useRef(null);
  const inputRef = useRef(null);

  const handleAdd = (event) => {
    event.preventDefault();
    if (!inputRef.current.value.trim()) return;
    dispatch({ type: "ADD_HABIT", payload: inputRef.current.value });
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Habit title"
      />
      <Button name="Add" onClick={handleAdd} />
    </form>
  );
};

export default HabitAddForm;
