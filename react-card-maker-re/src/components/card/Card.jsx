import React from "react";
import styles from "./card.module.css";

const Card = ({ card: { name, company, theme, title, email, message } }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.profile}
        src="/images/default_logo.png"
        alt="profile"
      />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default Card;
