import React from "react";
import styles from "./count.module.css";

const Count = ({ count }) => {
  return <span className={styles.count}>{count}</span>;
};

export default Count;
