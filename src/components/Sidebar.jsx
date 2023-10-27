import React from "react";
import styles from "./sidebar.module.css";

function Sidebar() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.heading}>Pocket Notes</p>
        <button className={styles.createGroupBtn}>
          <em>+</em> &nbsp; &nbsp;Create Notes group
        </button>
        <ul>
          <li>
            <div className={styles.groupname}>
              <div className={styles.icon}>C</div>
              <div className={styles.name}>Chhavi</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
