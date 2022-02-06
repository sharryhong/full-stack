import React, { useContext } from "react";
import Habit from "../habit/Habit";
import styles from "./habits.module.css";
import { HabitContext } from "App.jsx";

const Habits = () => {
  const { habits, onDelete, onIncrease, onDecrease } = useContext(HabitContext);

  return (
    <ul className={styles.habits}>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          onDelete={onDelete}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </ul>
  );
};

export default Habits;
