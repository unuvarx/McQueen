import React, { useEffect } from "react";
import styles from "./home.module.scss";

export default function Home() {
  useEffect(() => {
    const handleMouseEnter = () => {
      console.log("Selam");
    };

    const handleClick = () => {
      console.log("Selam");
      const nopButton = document.querySelector(`.${styles.no}`);
      const container = nopButton.parentElement;

      const containerRect = container.getBoundingClientRect();
      const buttonRect = nopButton.getBoundingClientRect();

      const maxX = containerRect.width - buttonRect.width;
      const maxY = containerRect.height - buttonRect.height;

      const newX = Math.floor(Math.random() * maxX);
      const newY = Math.floor(Math.random() * maxY);

      nopButton.style.left = `${9 * newX}px`;
      nopButton.style.top = `${9 * newY}px`;
    };

    const nopButton = document.querySelector(`.${styles.no}`);
    nopButton.addEventListener("mouseenter", handleClick);
    nopButton.addEventListener("click", handleClick);

    return () => {
      nopButton.removeEventListener("mouseenter", handleClick);
      nopButton.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.title}>
        <span> Benimle Date 'e Çıkar Mısın?</span>
      </div>
      <div className={styles.simsek}>
        <img src="images/simsek.png" alt="" />
      </div>
      <div className={styles.buttons}>
        <button className={styles.yes}>
          
          <a href="/success"> Evet </a>
        </button>
        <button
          className={styles.no}
          style={{
            position: "absolute",
          }}
        >
          
          Hayır
        </button>
      </div>
    </div>
  );
}
