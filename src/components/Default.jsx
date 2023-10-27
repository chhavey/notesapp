import React from "react";
import styles from "./default.module.css";
import notesapp from "../assets/landing-img.png";
import lock from "../assets/lock.png";

function Default() {
  return (
    <div className={styles.container}>
      <div className={styles.default}>
        <img src={notesapp} alt="notesapp" className={styles.img} />
        <h2 className={styles.heading}>Pocket Notes</h2>
        <p className={styles.defaultMessage}>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className={styles.encryption}>
        <img src={lock} alt="lock" className={styles.lock} />
        &nbsp; end-to-end encrypted
      </div>
    </div>
  );
}

export default Default;
