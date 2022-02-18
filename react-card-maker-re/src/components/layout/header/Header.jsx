import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ userId, onLogout }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to="/">Card Maker</Link>
      </h1>
      {userId && (
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
        {!userId && (
          <Link className={styles.link} to="/login">
            Login &#47; Join
          </Link>
        )}
        {userId && <button onClick={onLogout}>Logout</button>}
      </div>
    </header>
  );
};

export default Header;
