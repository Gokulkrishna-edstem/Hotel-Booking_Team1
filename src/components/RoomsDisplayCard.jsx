import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateBooking } from "../feature/bookingSlice";

function RoomsDisplayCard({
  hotelId,
  hotelName,
  hotelLocation,
  hotelrating,
  hotelImage,
  roomType,
  roomImage,
  description,
  availability,
  price,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(
      updateBooking({
        hotelId,
        hotelName,
        hotelLocation,
        hotelrating,
        hotelImage,
        roomType,
        roomImage,
        description,
        availability,
        price,
      })
    );
    navigate(`/myBooking/${hotelId}`);
  }

  return (
    <div className="w-[400px] rounded-2xl flex flex-col items-center justify-self-center shadow-2xl">
      <div className="h-[190px] w-full flex justify-center">
        <img
          className="h-[95%] w-[95%] rounded-2xl mt-1"
          src={roomImage}
          alt="Room images"
        />
      </div>

      <div className="w-[95%] mb-3 mt-2 flex flex-col justify-self-center">
        <h1 className="font-bold text-lg">{roomType}</h1>
        <p className="text-sm">{description}</p>
        <p className="mb-3 text-sm">
          {availability ? "Available" : "Not Available"}
        </p>
        <Button className="w-[95%]" variant="contained" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default RoomsDisplayCard;
