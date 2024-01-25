import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route
} from 'react-router-dom';

import { useState, useEffect } from "react";
import { getCookie } from './essentials/CookieHandler';
import { AuthContext } from './contexts/AuthContext';

import RootLayout from './layouts/RootLayout';
import AuthLayout from './layouts/AuthLayout';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const cookie = getCookie("user");
    if (cookie !== null) {
      setCurrentUser({
        firstName: cookie.firstName, 
        lastName: cookie.lastName,
        id: cookie.id
      });
    } 
  }, []);

  let routes;

  if (currentUser) {
    routes = (
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />}></Route>
        <Route path="*"></Route>
      </Route>
    );
  } else {
    routes = (
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />}></Route>
        <Route path="createAccount" element={<Signup />}></Route>
      </Route>
    );
  }

  const router = createBrowserRouter(createRoutesFromElements(routes));

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
