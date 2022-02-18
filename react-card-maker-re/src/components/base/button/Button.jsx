import React from "react";
import styles from "./button.module.css";

const Button = ({ children, primary, onClick }) => {
  return (
    <button
      className={`${styles.button} ${primary && styles.primary}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
