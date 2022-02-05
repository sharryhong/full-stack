import React from "react";
import Habit from "../habit/Habit";
import styles from "./habits.module.css";

const Habits = ({ habits, onDelete }) => {
  return (
    <ul className={styles.habits}>
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default Habits;
