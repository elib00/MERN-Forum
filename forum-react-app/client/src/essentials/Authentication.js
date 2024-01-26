import axios from "axios";
  
export const authenticateUser = async (userData) => {
    const { userEmail, userPassword } = userData;

    const loginData = {
      email: userEmail,
      password: userPassword
    };

    try{
      const response = await axios.post("http://localhost:5555/api/users/login", loginData);
      return response.data;
    }catch(err){
      return err.response.data;
    }
};    

export const createUser = async (userData) => {
    const {firstName, lastName, email, password } = userData;
    const newUserData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }

    try{
      const response = await axios.post("http://localhost:5555/api/users/register", newUserData);
      return response.data;
    }catch(err){
      console.log(err.response.data);
      return err.response.data;
    }
};