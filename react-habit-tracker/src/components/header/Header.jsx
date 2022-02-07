import React, { memo, useContext } from "react";
import Count from "../count/Count";
import styles from "./header.module.css";
import { HabitContext } from "HabitStore";

const Header = memo(() => {
  const { habits } = useContext(HabitContext);

  const setTotalCount = () => {
    return habits.filter((habit) => habit.count > 0).length;
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Habit Tracker</h1>
      <Count count={setTotalCount()} />
    </header>
  );
});

export default Header;
