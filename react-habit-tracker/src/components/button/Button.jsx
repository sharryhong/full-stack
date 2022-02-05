import React from "react";
import styles from "./button.module.css";

const Button = ({ name }) => <button className={styles.button}>{name}</button>;

export default Button;
