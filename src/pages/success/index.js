import React from "react";
import styles from "./success.module.scss";

export default function index() {
  return (
    <div className={styles.successContainer}>
      <div className={styles.title}>
        <span>KACHOOOOOWWWWWWW</span>
      </div>
      <div className={styles.kachow}>
        <img src="/images/mcqueen-sally.png" alt="" />
      </div>

      <div className={styles.hearts}>
        <img className={styles.heart} src="/images/heart.svg" alt="" />
        <img className={styles.heart} src="/images/heart.svg" alt="" />
        <img className={styles.heart} src="/images/heart.svg" alt="" />
      </div>
    </div>
  );
}