import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import styles from "../styles/AuthLayout.module.css";

const AuthLayout = () => {

  return (
    <div className={styles["auth-container"]}>
        <Outlet />
    </div>
  );
}

export default AuthLayout;
