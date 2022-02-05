import React, { useRef } from "react";
import Button from "../button/Button";
import styles from "./habit-add-form.module.css";

const HabitAddForm = ({ onAdd }) => {
  const formRef = useRef(null);
  const inputRef = useRef(null);

  const handleAdd = (event) => {
    event.preventDefault();
    if (!inputRef.current.value.trim()) return;
    onAdd(inputRef.current.value);
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
