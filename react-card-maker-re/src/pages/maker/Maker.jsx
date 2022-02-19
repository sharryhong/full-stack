import React, { useState } from "react";
import MakerEdit from "components/maker-edit/MakerEdit";
import MakerView from "components/maker-view/MakerView";
import styles from "./maker.module.css";

const Maker = () => {
  const [cards, setCards] = useState({
    id1: {
      id: "id1",
      name: "sharry",
      company: "HONG",
      theme: "light",
      title: "Web Front End Engineer",
      email: "sharryhong15@gmail.com",
      message: "Hello :)",
      fileName: "test",
      fileURL: "http://test.com",
    },
    id2: {
      id: "id2",
      name: "ori",
      company: "GOO",
      theme: "colorful",
      title: "Engineer",
      email: "goo@gmail.com",
      message: "Hello!",
      fileName: "",
      fileURL: "",
    },
  });
  return (
    <div className={styles.maker}>
      <MakerEdit cards={cards} />
      <MakerView cards={cards} />
    </div>
  );
};

export default Maker;
