import React, { memo, useContext } from "react";
import Count from "../count/Count";
import styles from "./habit.module.css";
import { HabitContext } from "HabitStore";

const Habit = memo(({ habit }) => {
  const { dispatch } = useContext(HabitContext);

  const handleDelete = () => {
    dispatch({ type: "DELETE_HABIT", payload: habit });
  };
  const handleIncrease = () => {
    dispatch({ type: "COUNT_INCREASE", payload: habit });
  };
  const handleDecrease = () => {
    dispatch({ type: "COUNT_DECREASE", payload: habit });
  };

  return (
    <li className={styles.habit}>
      <h3 className={styles.title}>{habit.title}</h3>
      <Count count={habit.count} />
      <button className={styles.button} onClick={handleIncrease}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className={styles.button} onClick={handleDecrease}>
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
});

export default Habit;
