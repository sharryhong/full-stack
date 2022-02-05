import React from "react";
import Count from "../count/Count";
import styles from "./habit.module.css";

const Habit = ({ habit, onDelete }) => {
  const handleDelete = () => {
    onDelete(habit.id);
  };

  return (
    <li className={styles.habit}>
      <h3 className={styles.title}>{habit.title}</h3>
      <Count count={habit.count} />
      <button className={styles.button}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className={styles.button}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button
        className={`${styles.button} ${styles.trash}`}
        onClick={handleDelete}
      >
        <i className="far fa-trash-alt"></i>
      </button>
    </li>
  );
};

export default Habit;
