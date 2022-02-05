import React from "react";
import Count from "../count/Count";
import styles from "./header.module.css";

const Header = ({ totalCount }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Habit Tracker</h1>
      <Count count={totalCount} />
    </header>
  );
};

export default Header;
