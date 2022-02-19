import React from "react";
import styles from "./button.module.css";

const Button = ({ children, primary, secondary, onClick }) => {
  return (
    <button
      className={`${styles.button} ${primary && styles.primary} ${
        secondary && styles.secondary
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
