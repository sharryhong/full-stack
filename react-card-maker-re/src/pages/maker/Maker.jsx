import React, { useContext } from "react";
import { MakerContext } from "store/maker_store";
import MakerEdit from "components/maker-edit/MakerEdit";
import MakerView from "components/maker-view/MakerView";
import styles from "./maker.module.css";

const Maker = () => {
  const { cards } = useContext(MakerContext);
  return (
    <div className={styles.maker}>
      <MakerEdit cards={cards} />
      <MakerView cards={cards} />
    </div>
  );
};

export default Maker;
