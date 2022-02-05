import React from "react";
import Habit from "../habit/Habit";
import styles from "./habits.module.css";

const Habits = ({ habits }) => {
  return (
    <ul className={styles.habits}>
      {habits.map((habit) => (
        <Habit habit={habit} key={habit.id} />
      ))}
    </ul>
  );
};

export default Habits;
