import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/default.jpeg";

const Card = ({
  card: { name, company, theme, title, email, message, fileURL },
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <img
          className={styles.profile}
          src={fileURL || DEFAULT_IMAGE}
          alt="profile"
        />
      </div>
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
