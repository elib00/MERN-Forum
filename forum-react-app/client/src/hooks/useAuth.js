import { AuthContext } from "../contexts/AuthContext.js";
import { useContext } from "react";

export const useAuth = () => {
    return useContext(AuthContext);
}