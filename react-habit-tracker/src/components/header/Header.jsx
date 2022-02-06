import React, { memo, useContext } from "react";
import Count from "../count/Count";
import styles from "./header.module.css";
import { HabitContext } from "App.jsx";

const Header = memo(() => {
  const { setTotalCount } = useContext(HabitContext);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Habit Tracker</h1>
      <Count count={setTotalCount()} />
    </header>
  );
});

export default Header;
