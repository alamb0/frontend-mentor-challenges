import React from "react";
import styles from "./Item.module.css";

export default function Item({ number, img, title, text }) {
  return (
    <div className={styles.Item}>
      <img src={img} alt="Sub Item" />
      <div className={styles.ItemContent}>
        <p className={styles.Number}>{number}</p>
        <b className={styles.Title}>{title}</b>
        <p>{text}</p>
      </div>
    </div>
  );
}
