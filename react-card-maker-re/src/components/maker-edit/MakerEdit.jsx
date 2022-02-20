import React, { useContext } from "react";
import { MakerContext } from "store/maker_store";
import CardCreate from "components/card-create/CardCreate";
import CardEdit from "components/card-edit/CardEdit";
import styles from "./maker-edit.module.css";

const MakerEdit = () => {
  const { cards } = useContext(MakerContext);
  return (
    <section className={styles.edit}>
      <h2 className={styles.title}>Card Maker</h2>
      <div>
        {Object.keys(cards).map((key) => (
          <CardEdit key={key} card={cards[key]} />
        ))}
      </div>
      <CardCreate />
    </section>
  );
};

export default MakerEdit;
