import React, { useEffect, useState } from "react";
import styles from "./notes.module.css";
import back from "../assets/back-arrow.png";
import send from "../assets/send.png";

function Notes({ selectedGroup, goBack }) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  useEffect(() => {
    const storedNotes = localStorage.getItem(selectedGroup?.name);
    setNotes(storedNotes ? JSON.parse(storedNotes) : []);
  }, [selectedGroup]);

  useEffect(() => {
    if (selectedGroup) {
      localStorage.setItem(selectedGroup.name, JSON.stringify(notes));
    }
  }, [selectedGroup, notes]);

  const handleKeyDown = (e) => {
    if (newNote) {
      if (e.key === "Enter" && e.shiftKey) {
        e.preventDefault();
        setNewNote((prevNote) => prevNote + "\n");
      } else if (e.key === "Enter" && newNote.trim() !== "") {
        e.preventDefault();
        saveNote(newNote);
        setNewNote("");
      }
    }
  };

  const saveNote = (newNote) => {
    const note = {
      text: newNote,
      time: new Date().toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      date: new Date().toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
    setNotes([...notes, note]);
  };

  const handleSave = (e) => {
    if ((e.key === "Enter" && newNote.trim() !== "") || newNote.trim() !== "") {
      saveNote(newNote);
      setNewNote("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={back} alt="press to go back" onClick={goBack} />
        <div
          className={styles.icon}
          style={{
            backgroundColor: !selectedGroup ? "none" : selectedGroup.color,
          }}
        >
          {!selectedGroup
            ? ""
            : selectedGroup.name
                .split(" ")
                .slice(0, 2)
                .map((word) => word[0].toUpperCase())
                .join("")}
        </div>
        <div className={styles.heading}>
          {selectedGroup ? selectedGroup.name : ""}
        </div>
      </div>
      <div className={styles.notesSection}>
        {notes.map((note, index) => (
          <div key={index} style={{ display: "flex" }}>
            <div className={styles.datetime}>
              {note.time}
              <br /> {note.date}
            </div>
            <div className={styles.text}>{note.text}</div>
          </div>
        ))}
      </div>
      <div className={styles.enterNotesSection}>
        <textarea
          className={styles.enterNotes}
          placeholder="Enter your text here..."
          rows={7}
          name="notes"
          value={newNote}
          onChange={(e) => {
            setNewNote(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <img src={send} alt="send" onClick={handleSave} />
      </div>
    </div>
  );
}

export default Notes;
