import { setCookie, deleteCookie } from "./CookieHandler";

export const permitLogin = (userData, setCurrentUser) => {

    const { _id, firstName, lastName, email } = userData;
    const cookieData = {
        id: _id,
        firstName: firstName,
        lastName: lastName,
        email: email
    }

    // console.log(cookieData);
    setCookie("user", cookieData, 1);
    setCurrentUser(cookieData);
};   

export const logoutUser = (setCurrentUser) => {
    deleteCookie("user");
    setCurrentUser(null);
};  

