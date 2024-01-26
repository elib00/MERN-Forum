import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createUser } from "../essentials/Authentication.js";
import { permitLogin } from '../essentials/Utility.js';
import { useAuth } from "../hooks/useAuth.js"; 

const Signup = () => {
  const [userDetails, setUserDetails] = useState({firstName: "", lastName: "", email: "", password: ""});
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await createUser(userDetails);
    if(res && res.success){
      await permitLogin(res.data, setCurrentUser);
      navigate("/");
    }else{
      console.log(res.message);
    }
  };

  const handleChange = (event) => {
    setUserDetails({...userDetails, [event.target.name]: event.target.value});
    console.log(userDetails);
  };

  return (
    <div style={{color: "white"}}>
      <form 
        onSubmit={handleSubmit}>
        <label>Firstname: </label>
        <input name="firstName" onChange={handleChange}></input>
        <label>Lastname: </label>
        <input name="lastName" onChange={handleChange}></input>
        <label>Email: </label>
        <input type="email" name="email" onChange={handleChange}></input>
        <label>Password: </label>
        <input name="password" onChange={handleChange}></input>
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
