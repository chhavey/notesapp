import React from "react";
import Default from "./components/Default";
import Sidebar from "./components/Sidebar";
import styles from "./home.module.css";

function Home() {
  return (
    <div>
      <div className={styles.box1}>
        <Sidebar />
        <Default />
      </div>
    </div>
  );
}

export default Home;
