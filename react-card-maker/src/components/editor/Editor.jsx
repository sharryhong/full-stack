import CardAddForm from "components/card_add_form/CardAddForm";
import CardEditForm from "components/card_edit_form/CardEditForm";
import React from "react";
import styles from "./editor.module.css";

const Editor = ({ FileInput, cards, addCard, deleteCard, updateCard }) => {
  return (
    <section className={styles.editor}>
      <h2 className={styles.title}>Card Maker</h2>
      <CardAddForm FileInput={FileInput} addCard={addCard} />
      {Object.keys(cards).map((key) => (
        <CardEditForm
          FileInput={FileInput}
          card={cards[key]}
          deleteCard={deleteCard}
          updateCard={updateCard}
          key={key}
        />
      ))}
    </section>
  );
};

export default Editor;
