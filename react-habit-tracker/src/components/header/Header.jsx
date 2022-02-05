import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Habit Tracker</h1>
      <span>0</span>
    </header>
  );
};

export default Header;
