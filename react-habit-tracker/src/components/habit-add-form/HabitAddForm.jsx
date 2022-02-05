import React from "react";
import Button from "../button/Button";
import styles from "./habit-add-form.module.css";

const HabitAddForm = () => {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Habit title" />
      <Button name="Add" />
    </form>
  );
};

export default HabitAddForm;
