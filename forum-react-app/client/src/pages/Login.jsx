import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { authenticateUser } from '../essentials/Authentication';
import { permitLogin } from "../essentials/Utility/";
import { useAuth } from "../hooks/useAuth";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [userDetails, setUserDetails] = useState({userEmail: "", userPassword: ""});
  const [authError, setAuthError] = useState("");
  const { setCurrentUser } = useAuth();
  const [userExists, setUserExists] = useState(true);

  const handleChange = (event) => {
    setUserDetails({...userDetails, [event.target.name]: event.target.value});
    console.log({...userDetails});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await authenticateUser({...userDetails});
    console.log(res);
    if(res && res.success) {
      permitLogin(res.data, setCurrentUser);
    }else{
      setAuthError(res.message);
      setUserExists(false);
      setTimeout(() => {
        setUserExists(true);
        setUserDetails({userEmail: "", userPassword: ""});
      }, 2000);
    }
  };
  
  const createNewAccount = () => {
    console.log("redirecting to...");
    <Navigate to="/signup"/>
  } 

  return (
    <div className={styles["login-container"]}>
      <div className={styles["forum-details-wrapper"]}>
        <h1>forum</h1>
      </div>
      <div className={styles["login-details-wrapper"]}>
        <form 
          onSubmit={handleSubmit}>
          <input 
            className={!userExists ? styles["input-error"] : ""}
            name="userEmail"
            onChange={handleChange}
            value={userDetails.firstName}
            placeholder="Email"
          />
          <input 
            className={!userExists ? styles["input-error"] : ""}
            name="userPassword"
            onChange={handleChange}
            value={userDetails.lastName}
            placeholder="Password"
          />
          <button 
            className={`${styles["btn"]}`}
            type="submit">Log In
          </button>
          <div className={styles["forgot-password-wrapper"]}>
            <NavLink to="createAccount">Forgot password?</NavLink>
          </div>
          <button 
            className={`${styles["btn"]} ${styles["btn-create-account"]}`}
            type="button"
            onClick={createNewAccount}>Create new account
          </button>
        </form>
        {!userExists && 
          <div className={styles["login-error"]}>
            <h4>{authError}</h4>
          </div>
        }
      </div>
    </div>
  );
}

export default Login;
