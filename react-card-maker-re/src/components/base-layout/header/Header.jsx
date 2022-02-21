import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { SessionContext } from "store/session_check.js";

const Header = ({ onLogout }) => {
  const { isLoggedIn } = useContext(SessionContext);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to="/">Card Maker</Link>
      </h1>
      {isLoggedIn && (
        <nav className={styles.nav}>
          <NavLink
            to="maker"
            className={({ isActive }) =>
              styles.navitem + " " + (isActive ? styles.active : undefined)
            }
          >
            maker
          </NavLink>
        </nav>
      )}
      <div className={styles.auth}>
        {!isLoggedIn && (
          <Link className={styles.link} to="/login">
            Login &#47; Join
          </Link>
        )}
        {isLoggedIn && <button onClick={onLogout}>Logout</button>}
      </div>
    </header>
  );
};

export default Header;
