import React from "react";
import styles from "./shop-card.module.css";

export default function ShopCard({ card }) {
  return <div className={styles.container}>{card}</div>;
}
