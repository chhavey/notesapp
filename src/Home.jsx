import React, { useState, useEffect } from "react";
import Default from "./components/Default";
import Sidebar from "./components/Sidebar";
import styles from "./home.module.css";
import Notes from "./components/Notes";
import Popup from "./components/Popup";

function Home() {
  const [viewport, setViewport] = useState("desktop");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [groups, setGroups] = useState([]);

  const onSelectGroup = (item) => {
    setSelectedGroup(item);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleDialogSave = (name, color, e) => {
    const newGroup = { id: Date.now(), name, color };
    setGroups((prevGroups) => {
      const updatedGroups = [...prevGroups, newGroup];
      localStorage.setItem("groups", JSON.stringify(updatedGroups));
      return updatedGroups;
    });
  };

  const updateViewport = () => {
    if (window.innerWidth < 769) {
      setViewport("mobile");
    } else {
      setViewport("desktop");
    }
  };

  useEffect(() => {
    updateViewport();
    window.addEventListener("resize", updateViewport);
    try {
      const storedGroups = JSON.parse(localStorage.getItem("groups") || "[]");
      setGroups(storedGroups);
    } catch (error) {
      console.error("Error loading groups from local storage:", error);
    }
    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  return (
    <div>
      <div className={styles.container}>
        {viewport === "desktop" ? (
          <div className={styles.desktop}>
            {selectedGroup ? (
              <div className={styles.ds}>
                <Sidebar
                  groupNames={groups}
                  onSelectGroup={onSelectGroup}
                  openDialog={openDialog}
                />
                <Notes />
              </div>
            ) : (
              <div className={styles.dns}>
                <Sidebar
                  groupNames={groups}
                  onSelectGroup={onSelectGroup}
                  openDialog={openDialog}
                />
                <Default />
              </div>
            )}
          </div>
        ) : (
          <div className={styles.mobile}>
            {selectedGroup ? (
              <div className={styles.ms}>
                <Notes />
              </div>
            ) : (
              <div className={styles.ms}>
                <Sidebar
                  groupNames={groups}
                  onSelectGroup={onSelectGroup}
                  openDialog={openDialog}
                />
              </div>
            )}
          </div>
        )}
      </div>
      {isDialogOpen && (
        <Popup handleDialogSave={handleDialogSave} closeDialog={closeDialog} />
      )}
    </div>
  );
}

export default Home;
