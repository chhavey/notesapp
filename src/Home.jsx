import React, { useState, useEffect } from "react";
import Default from "./components/Default";
import Sidebar from "./components/Sidebar";
import styles from "./home.module.css";
import Notes from "./components/Notes";

function Home() {
  const [viewport, setViewport] = useState("desktop");
  const [selectedGroup, setSelectedGroup] = useState(null);

  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  const onSelectGroup = (item) => {
    setSelectedGroup(item);
  };

  const updateViewport = () => {
    if (window.innerWidth <= 768) {
      setViewport("mobile");
    } else {
      setViewport("desktop");
    }
  };

  useEffect(() => {
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  return (
    <div>
      <div className={styles.container}>
        {viewport === "desktop" ? (
          <div>
            {selectedGroup ? (
              <div className={styles.ds}>
                <Sidebar groupNames={items} onSelectGroup={onSelectGroup} />
                <Notes />
              </div>
            ) : (
              <div className={styles.dns}>
                <Sidebar groupNames={items} onSelectGroup={onSelectGroup} />
                <Default />
              </div>
            )}
          </div>
        ) : (
          <div>
            {selectedGroup ? (
              <Notes />
            ) : (
              <Sidebar groupNames={items} onSelectGroup={onSelectGroup} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
