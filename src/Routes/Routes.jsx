import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Allusers from "../Pages/Allusers/Allusers";
import AddUser from "../Pages/AddUser/AddUser";
import UserDetails from "../Pages/Allusers/UserDetails";
import Update from "../Pages/Update/Update";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/allUsers',
          element: <Allusers></Allusers>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
         {
          path: '/addUser',
          element: <AddUser></AddUser>
         },
         {
          path: '/userDetails/:id',
          element: <UserDetails></UserDetails>
         },
         {
          path: '/update',
          element: <Update></Update>
         }
      ]
    },
  ]);
  