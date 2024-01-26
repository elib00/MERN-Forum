import { setCookie, deleteCookie } from "./CookieHandler";

export const permitLogin = async (userData, setCurrentUser, setIsLoggedIn) => {

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
    setIsLoggedIn(true);
};   

export const logoutUser = (setCurrentUser, setIsLoggedIn) => {
    deleteCookie("user");
    setCurrentUser(null);
    setIsLoggedIn(false);
};  

