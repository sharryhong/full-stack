import React from "react";
import CardCreate from "components/card-create/CardCreate";
import CardEdit from "components/card-edit/CardEdit";
import styles from "./maker-edit.module.css";

const MakerEdit = ({ cards }) => {
  return (
    <section className={styles.edit}>
      <h2 className={styles.title}>Card Maker</h2>
      <CardCreate />
      <div>
        {Object.keys(cards).map((key) => (
          <CardEdit key={key} card={cards[key]} />
        ))}
      </div>
    </section>
  );
};

export default MakerEdit;
