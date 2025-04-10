import React from "react";
import Button from "@mui/material/Button";

function RoomsDisplayCard({ image, name, description, availability }) {
  return (
    <div className=" w-[400px]  rounded-2xl flex flex-col items-center justify-self-center shadow-2xl">
      <div className=" h-[190px] w-full flex  justify-center">
        <img
          className="h-[95%] w-[95%] rounded-2xl mt-1"
          src={image}
          alt="Room images"
        />
      </div>

      <div className="w-[95%] mb-3 mt-2 flex flex-col justify-self-center">
        <h1 className="font-bold text-lg">{name} </h1>
        {/* map */}
        <p className="text-sm">{description}</p>
        <p className="mb-3">{availability}</p>
        <Button className="w-[95%]" variant="contained">
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default RoomsDisplayCard;
