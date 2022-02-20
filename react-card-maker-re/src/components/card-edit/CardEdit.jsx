import React from "react";
import CardForm from "components/card-form/CardForm";
import styles from "./card-edit.module.css";

const CardEdit = ({ card }) => {
  return (
    <section className={styles.card_edit}>
      <CardForm card={card} editMode />
    </section>
  );
};

export default CardEdit;
