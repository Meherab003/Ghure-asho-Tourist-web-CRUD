import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import TouristsSpot from "../Pages/TouristsSpot";
import AddSpots from "../Pages/AddSpots";
import TouristSpotsDatils from "../Pages/TouristSpotsDatils";
import MyList from "../Pages/MyList";
import UpdateSpot from "../Pages/UpdateSpot";
import CountrySpots from "../Pages/CountrySpots";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://ghure-asho-server-5he4wafv1-meherab-hossain-bhuiyans-projects.vercel.app/spots"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/touristSpots",
        element: (
          <PrivateRoute>
            <TouristsSpot></TouristsSpot>
          </PrivateRoute>
        ),
        loader: () => fetch("https://ghure-asho-server-5he4wafv1-meherab-hossain-bhuiyans-projects.vercel.app/spots"),
      },
      {
        path: "/addSpots",
        element: (
          <PrivateRoute>
            <AddSpots></AddSpots>
          </PrivateRoute>
        ),
      },
      {
        path: "/touristSpots/:id",
        element: <PrivateRoute><TouristSpotsDatils></TouristSpotsDatils></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://ghure-asho-server-5he4wafv1-meherab-hossain-bhuiyans-projects.vercel.app/spots/${params.id}`),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/touristSpots/update/:id",
        element: (
          <PrivateRoute>
            <UpdateSpot></UpdateSpot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://ghure-asho-server-5he4wafv1-meherab-hossain-bhuiyans-projects.vercel.app/spots/${params.id}`),
      },
      {
        path: "/touristSpots/countries/:countryName",
        element: <PrivateRoute><CountrySpots></CountrySpots></PrivateRoute>,
        loader:({params}) => fetch(`https://ghure-asho-server-5he4wafv1-meherab-hossain-bhuiyans-projects.vercel.app/touristSpots/countries/${params.countryName}`)
      },
    ],
  },
]);

export default router;
