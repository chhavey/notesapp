import React from "react";
import styles from "./sidebar.module.css";

function Sidebar({ groupNames, onSelectGroup }) {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.heading}>Pocket Notes</p>
        <button className={styles.createGroupBtn}>
          <em>+</em> &nbsp; &nbsp;Create Notes group
        </button>
        <ul className={styles.ul}>
          {groupNames.map((item) => (
            <li key={item.id} onClick={() => onSelectGroup(item)}>
              <div className={styles.groupname}>
                <div className={styles.icon}>
                  {item.name
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0].toUpperCase())
                    .join("")}
                </div>
                <div className={styles.name}>{item.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
