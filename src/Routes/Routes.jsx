import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import TouristsSpot from "../Pages/TouristsSpot";
import AddSpots from "../Pages/AddSpots";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/touristSpots',
          element: <PrivateRoute><TouristsSpot></TouristsSpot></PrivateRoute>
        },
        {
          path: '/addSpots',
          element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>
        }
      ]
    },
  ]);


export default router;