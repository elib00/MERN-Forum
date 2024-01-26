import React from "react";
import { Outlet } from "react-router-dom";
import {Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth.js";
import Header from "../components/Header";
import styles from "../styles/RootLayout.module.css";

const RootLayout = () => {
  const { isLoggedIn } = useAuth();

  return (isLoggedIn ?
    <div className={styles["root-layout-container"]}>
        <Header/>
        <Outlet/>
    </div>

    :

    <Navigate to="/login" />
  );
}

export default RootLayout;
