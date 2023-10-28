import React from "react";
import styles from "./notes.module.css";
import back from "../assets/back-arrow.png";

function Notes() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={back} alt="press to go back" />
        <div className={styles.icon}>CU</div>
        <div className={styles.heading}> Cuvette Notes</div>
      </div>
      <div className={styles.notesSection}>note 1</div>
    </div>
  );
}

export default Notes;
