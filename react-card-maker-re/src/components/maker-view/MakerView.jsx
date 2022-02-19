import React from "react";
import Card from "components/card/Card";
import styles from "./maker-view.module.css";

const MakerView = ({ cards }) => {
  return (
    <section className={styles.view}>
      <h2 className={styles.title}>Card Preview</h2>
      {Object.keys(cards).map((key) => (
        <Card key={key} card={cards[key]} />
      ))}
    </section>
  );
};

export default MakerView;
