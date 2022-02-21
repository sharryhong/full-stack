import React, { memo } from "react";
import classNames from "classnames/bind";
import styles from "./button.module.css";

const cx = classNames.bind(styles);

const Button = memo(
  ({ children, primary, secondary, dark, round, onClick }) => {
    console.log("button");
    const classes = cx({ button: true, primary, secondary, dark, round });
    return (
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    );
  }
);

export default Button;
