import React, { memo } from "react";
import styles from "./count.module.css";

const Count = memo(({ count }) => {
  return <span className={styles.count}>{count}</span>;
});

export default Count;
