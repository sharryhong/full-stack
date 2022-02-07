import React, { useContext } from "react";
import Habit from "components/habit/Habit";
import HabitAddForm from "components/habit-add-form/HabitAddForm";
import Button from "components/button/Button";
import styles from "./habits.module.css";
import { HabitContext } from "HabitStore";

const Habits = () => {
  const { habits, dispatch } = useContext(HabitContext);

  const onResetAll = () => {
    dispatch({ type: "RESET_COUNT" });
  };

  return (
    <>
      <HabitAddForm />
      <ul className={styles.habits}>
        {habits.map((habit) => (
          <Habit key={habit.id} habit={habit} />
        ))}
      </ul>
      <Button name="Reset All" onClick={onResetAll} />
    </>
  );
};

export default Habits;
