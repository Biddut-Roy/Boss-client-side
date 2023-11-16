
import {
    createBrowserRouter,
  } from "react-router-dom"; 
import Home from "../pages/HOme/Home/home";
import App from "../App";
import MEnu from "../pages/Menu/Menu/MEnu";
import Order from "../pages/Order/order/Order";
import Login from "../pages/Login and Register/Login";
import Register from "../pages/Login and Register/Register";
import Card from "../pages/dashboard/Card";
import Dashboard from "../Layout/Dashboard";
import User from "../pages/Admin Roll/User/User";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Home></Home>  ,
        },
        {
          path: "/menu",
          element:<MEnu></MEnu>,
        },
        {
          path: "/order/:category",
          element:<Order></Order>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
    {
      path: "/dashboard" ,
      element:<Dashboard></Dashboard> ,
      children:[
        {
          path: "/dashboard/card",
          element: <Card></Card>,
        },



        //  Admin Route
        {
          path: "/dashboard/Users",
          element: <User></User>,
        }
      ]
    }
  ]);