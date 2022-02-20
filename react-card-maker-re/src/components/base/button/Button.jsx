import React from "react";
import styles from "./button.module.css";

const Button = ({ children, primary, secondary, dark, round, onClick }) => {
  return (
    <button
      className={`${styles.button} ${primary && styles.primary} 
      ${secondary && styles.secondary} ${dark && styles.dark} ${
        round && styles.round
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
