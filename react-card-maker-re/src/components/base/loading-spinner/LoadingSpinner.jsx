import React, { memo } from "react";
import styles from "./loading-spinner.module.css";

const LoadingSpinner = memo(() => {
  console.log("LoadingSpinner");
  return <div className={styles.loading}></div>;
});

export default LoadingSpinner;
