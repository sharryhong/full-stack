import React from "react";
import CardForm from "components/card-form/CardForm";
import styles from "./card-create.module.css";

const CardCreate = () => {
  return (
    <section className={styles.card_create}>
      <CardForm />
    </section>
  );
};

export default CardCreate;
