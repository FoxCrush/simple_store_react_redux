import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.navMenuContainer}>
        <ul className={styles.navMenuList}>
          <li className={styles.navMenuItem}>
            <Link to={"/"}>shop</Link>
          </li>
          <li className={styles.navMenuItem}>
            <Link to={"/about"}>about</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to={"/login"}>login</Link>
      </div>
    </div>
  );
}
