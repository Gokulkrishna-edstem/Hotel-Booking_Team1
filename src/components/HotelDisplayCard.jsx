import React from "react";

function HotelDisplayCard({ image, name, price, location }) {
  return (
    <div className="w-[230px] sm:w-[250px] flex flex-col justify-center items-center h-[300px] rounded-2xl shadow-xl hover:shadow-2xl group ">
      <img
        src={image}
        alt="room image"
        className="w-[95%] h-[60%] group-hover:h-[65%] transition-all duration-300 ease-in-out rounded-2xl"
      />
      <div className="w-[95%] h-[30%] group-hover:h-[25%] transition-all duration-300 ease-in-out mt-2">
        <h1 className="text-lg sm:text-xl font-bold ">{name}</h1>
        <p className="text-sm sm:text-lg">{location}</p>
        <h4 className="text-md font-bold">from {price}/night</h4>
      </div>
    </div>
  );
}

export default HotelDisplayCard;
