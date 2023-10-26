import React from "react";
import styles from "./default.module.css";
import notesapp from "../assets/landing-img.png";

function Default() {
  return (
    <div className={styles.container}>
      <div>
        <img src={notesapp} alt="notesapp" />
        <h2>Pocket Notes</h2>
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
    </div>
  );
}

export default Default;
