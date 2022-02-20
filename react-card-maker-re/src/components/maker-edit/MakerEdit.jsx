import React, { useContext } from "react";
import { MakerContext } from "store/maker_store";
import styles from "./maker-edit.module.css";
import CardForm from "components/card-form/CardForm";

const MakerEdit = () => {
  const { cards } = useContext(MakerContext);
  return (
    <section className={styles.edit}>
      <h2 className={styles.title}>Card Maker</h2>
      <div className={styles.card_edit}>
        {Object.keys(cards).map((key) => (
          <CardForm key={key} card={cards[key]} editMode />
        ))}
      </div>
      <div className={styles.card_create}>
        <CardForm />
      </div>
    </section>
  );
};

export default MakerEdit;
