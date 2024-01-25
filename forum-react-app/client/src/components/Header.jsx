import React from "react";
import styles from "../styles/Header.module.css";
import { logoutUser } from "../essentials/Utility"
import { useAuth } from "../hooks/useAuth";
// import React from "react";

const Header = () => {
  const { setCurrentUser } = useAuth();

  const handleClick = () => {
    logoutUser(setCurrentUser);
  };
  
  return (
    <header className={styles["header-container"]}>
      <h1>Forum</h1>
      <button 
        className={`${styles["btn"]} ${styles["btn-logout"]}`}
        onClick={handleClick}
      >Logout</button>
    </header>
  );
}

export default React.memo(Header);
