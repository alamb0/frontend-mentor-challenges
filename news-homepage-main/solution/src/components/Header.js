import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <nav className={styles.Header}>
      <img src={logo} alt="Logo" />
      <div className={styles.Links}>
        <a href="">Home</a> <a href="">New</a> <a href="">Popular</a>{" "}
        <a href="">Trending</a> <a href="">Categories</a>
      </div>
    </nav>
  );
}
