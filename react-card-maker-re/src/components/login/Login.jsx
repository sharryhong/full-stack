import React from "react";
import Button from "components/base/Button";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService.login(event.target.innerText);
  };

  return (
    <section className={styles.login}>
      <h2 className={styles.title}>Login</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Button primary onClick={onLogin}>
            Google
          </Button>
        </li>
        <li className={styles.item}>
          <Button primary onClick={onLogin}>
            Github
          </Button>
        </li>
      </ul>
    </section>
  );
};

export default Login;
