import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../index.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { updateSearch } from "../feature/hotelSlice";

function SearchLocation({ className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckout] = useState("");
  const [guests, setGuests] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!location || !checkIn || !checkOut || !guests) {
      setShowAlert(true);
      return;
    }

    dispatch(updateSearch({ location, checkIn, checkOut, guests }));

    navigate("/hotelList");
  }

  return (
    <>
      {showAlert && alert("Enter all field")}
      <form
        onSubmit={handleSubmit}
        className={`${className} container mx-auto w-5/6 shadow-lg flex  rounded-sm sm:rounded-2xl items-center p-2`}
      >
        <div className=" flex sm:flex-row  w-full justify-between divide-x divide-gray-300">
          <div className="px-0 md:px-4 flex flex-col">
            <span className="text-sm font-semibold">Location</span>
            <input
              type="text"
              placeholder="Where are you going?"
              className="text-gray-500 text-sm outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="px-4 flex flex-col">
            <span className="text-sm font-semibold">Check-in</span>
            <input
              type="date"
              placeholder="DD/MM/YYYY"
              className="text-gray-500 text-sm outline-none"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          <div className="px-4 flex flex-col">
            <span className="text-sm font-semibold">Check-out</span>
            <input
              type="date"
              placeholder="DD/MM/YYYY"
              className="text-gray-500 text-sm outline-none"
              value={checkOut}
              onChange={(e) => setCheckout(e.target.value)}
            />
          </div>

          <div className="px-4 flex flex-col">
            <span className="text-sm font-semibold">Guests</span>
            <input
              type="text"
              placeholder="Number of guests"
              className="text-gray-500 text-sm outline-none"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
        </div>

        <button className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-500 text-white ml-4">
          <SearchIcon />
        </button>
      </form>
    </>
  );
}

export default SearchLocation;
