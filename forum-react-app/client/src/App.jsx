import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route,
  Navigate
} from 'react-router-dom';

import { useState, useEffect } from "react";
import { getCookie } from './essentials/CookieHandler';
import { AuthContext } from './contexts/AuthContext';

import RootLayout from './layouts/RootLayout';
import AuthLayout from './layouts/AuthLayout';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("nirerender");

  useEffect(() => {
    const cookie = getCookie("user");
    if (cookie !== null) {
      setCurrentUser({
        firstName: cookie.firstName, 
        lastName: cookie.lastName,
        id: cookie.id
      });
      setIsLoggedIn(true);
    } 
  }, []);

  const routes = (
    <Route path="/">
      <Route index element={<Navigate to="home"/>}></Route>
      <Route element={<RootLayout/>}>
        <Route path="home" element={<Home />}></Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />}></Route>
        <Route path="create-account" element={<Signup />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes));

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn}}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
