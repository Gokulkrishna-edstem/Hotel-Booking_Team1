import React from "react";
import "../index.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchLocation({ className }) {
  return (
    <div
      className={`${className} container mx-auto w-5/6 rounded-full shadow-lg bg-white flex items-center p-2`}
    >
      <div className="flex w-full justify-between divide-x divide-gray-300">
        <div className="px-4 flex flex-col">
          <span className="text-sm font-semibold">Location</span>
          <input
            type="text"
            placeholder="Where are you going?"
            className="text-gray-500 text-sm outline-none"
          />
        </div>

        <div className="px-4 flex flex-col">
          <span className="text-sm font-semibold">Check-in</span>
          <input
            type="text"
            placeholder="Add date"
            className="text-gray-500 text-sm outline-none"
          />
        </div>

        <div className="px-4 flex flex-col">
          <span className="text-sm font-semibold">Check-out</span>
          <input
            type="text"
            placeholder="Add date"
            className="text-gray-500 text-sm outline-none"
          />
        </div>

        <div className="px-4 flex flex-col">
          <span className="text-sm font-semibold">Guests</span>
          <input
            type="text"
            placeholder="Number of guests"
            className="text-gray-500 text-sm outline-none"
          />
        </div>
      </div>

      <button className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-500 text-white ml-4">
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchLocation;
