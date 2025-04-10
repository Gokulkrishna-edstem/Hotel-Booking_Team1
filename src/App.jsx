import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeScreen, { fetchHotels } from "./Pages/HomeScreen";
import BookingForm from "./Pages/BookingForm";
import HotelDetail, {
  fetchASingleHotel as getSpecificHotel,
} from "./Pages/HotelDetail";
import HotelsList from "./Pages/HotelsList";
import Login from "./Pages/Login";
import MyBookings from "./Pages/MyBookings";
import Signup from "./Pages/Signup";
import Layout from "./utils/Layout";

function App() {
  // setting up routing using createBrowserRouter from react-router-dom
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomeScreen />,
          loader: fetchHotels,
        },
        {
          path: "/bookingForm",
          element: <BookingForm />,
        },
        {
          path: "/hotelDetail/:id",
          element: <HotelDetail />,
          loader: getSpecificHotel,
        },
        {
          path: "/hotelList",
          element: <HotelsList />,
        },
        {
          path: "/hotelList/hotelDetail/:id",
          element: <HotelDetail />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/myBooking",
          element: <MyBookings />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);

  // setting router, and provied is given in main.jsx
  return <RouterProvider router={router} />;
}

export default App;
