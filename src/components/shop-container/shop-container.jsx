import React from "react";
import ShopCard from "../shop-card";
import styles from "./shop.module.css";
const cards = [
  "card1",
  "card1",
  "card1",
  "card1",
  "card1",
  "card1",
  "card1",
  "card1",
  "card1",
];

export default function ShopContainer() {
  return (
    <ul className={styles.container}>
      {cards.map((card, index) => (
        <ShopCard key={index} card={card} />
      ))}
    </ul>
  );
}
