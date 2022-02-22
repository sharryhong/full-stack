import React from "react";
import Button from "components/base/button/Button";
import styles from "./login.module.css";

const Login = ({ onLogin }) => {
  return (
    <section className={styles.login}>
      <h2 className={styles.title}>Login &#47; Join</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Button primary round onClick={onLogin}>
            Google
          </Button>
        </li>
        <li className={styles.item}>
          <Button primary round onClick={onLogin}>
            Github
          </Button>
        </li>
      </ul>
    </section>
  );
};

export default Login;
