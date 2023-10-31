import React, { useState } from "react";
import styles from "./popup.module.css";

const colors = [
  "#B38BFA",
  "#FF79F2",
  "#43E6FC",
  "#F19576",
  "#0047FF",
  "#6691FF",
];

function Popup({ closeDialog, handleDialogSave }) {
  const color = "#9A9A9A";
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSave = () => {
    if (name) {
      if (selectedColor) {
        handleDialogSave(name, selectedColor);
        closeDialog();
      } else {
        handleDialogSave(name, color);
        closeDialog();
      }
    }
  };

  const handleClose = (e) => {
    // Checking if the click target is not within the dialogbox
    if (e.target.className === styles.container) {
      closeDialog();
    }
  };

  return (
    <div className={styles.container} onClick={handleClose}>
      <div className={styles.dialogbox}>
        <div className={styles.heading}>Create New Notes group</div>
        <div className={styles.name}>
          <p className={styles.subheading}>Group Name</p>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your group name..."
            id="name"
            autoComplete="false"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.color}>
          <p className={styles.subheading}>Choose color</p>
          {colors.map((item, i) => (
            <div
              key={i}
              className={`${styles.colorbox} ${
                selectedColor === item ? styles.selected : ""
              }`}
              style={{ backgroundColor: item }}
              onClick={() => setSelectedColor(item)}
            ></div>
          ))}
        </div>
        <button className={styles.createBtn} onClick={handleSave}>
          Create
        </button>
      </div>
    </div>
  );
}

export default Popup;
