import React, { memo } from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";

const getStyles = (theme) => {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
};

const Card = memo(({ card }) => {
  const { name, company, title, email, message, fileURL, theme } = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.profile} src={url} alt="profile" />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
});

export default Card;
