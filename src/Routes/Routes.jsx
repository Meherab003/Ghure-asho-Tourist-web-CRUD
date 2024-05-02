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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/spots"),
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
        loader: () => fetch("http://localhost:5000/spots"),
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
        element: <TouristSpotsDatils></TouristSpotsDatils>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/spots/${params.id}`),
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
        loader:({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
      },
    ],
  },
]);

export default router;
