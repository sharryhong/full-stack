import React from "react";
import Maker from "../maker/Maker";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.banner}>
        <h2 className={styles.title}>Make Profile Card</h2>
        <p className={styles.text}>
          마음껏 만들어보세요, 로그인 하시면 저장하실 수 있어요!
        </p>
        <p className={styles.text}>
          Feel free to make your card here, login to save!
        </p>
      </div>
      <Maker />
    </div>
  );
};

export default Home;
