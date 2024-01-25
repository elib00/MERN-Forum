import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import styles from "../styles/Home.module.css";

// import {useState, useContext } from "react";
// import { UserContext } from "../contexts/UserContext";

const Home = () => {
  return (
    <main className={styles["homepage-container"]}>
        <Sidebar />
        <Content />
    </main>
  );
}

export default Home;
