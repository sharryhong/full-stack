import React from "react";
import MakerEdit from "components/maker-edit/MakerEdit";
import MakerView from "components/maker-view/MakerView";
import styles from "./maker.module.css";

const Maker = () => {
  return (
    <div className={styles.maker}>
      <MakerEdit />
      <MakerView />
    </div>
  );
};

export default Maker;
