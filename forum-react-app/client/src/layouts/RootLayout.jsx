import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles/RootLayout.module.css";

const RootLayout = () => {
  return (
    <div className={styles["root-layout-container"]}>
        <Header/>
        <Outlet/>
    </div>
  );
}

export default RootLayout;
