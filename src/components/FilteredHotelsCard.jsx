import React from "react";
import Button from "@mui/material/Button";

function FilteredHotelsCard({
  name,
  location,
  rating,
  price,
  image,
  room,
  guest,
}) {
  const primaryRoom = room?.[0];

  return (
    <div className="bg-slate-50 w-[90%] mx-auto mt-4 mb-5 h-[230px] shadow-lg rounded-2xl flex overflow-hidden p-3">
      {/* Hotel Image */}
      <div className="w-[30%]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={image}
          alt={name}
        />
      </div>

      {/*  Hotel Info */}
      <div className="w-[70%] pl-5 flex flex-col justify-between">
        {/*  Title and Rating */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-gray-600">{location}</p>
            <p className="text-xs text-gray-500 mt-1">
              Free cancellation • Breakfast included
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-green-600 font-medium">
              {(rating > 4 && "Excellent") ||
                (rating > 3 && "Average") ||
                (rating > 3 && "poor")}
            </p>
            <p className="text-xs text-gray-400">1920 reviews</p>
            <div className="bg-green-200 text-green-900 text-sm font-semibold rounded-xl px-2 py-1 inline-block mt-1">
              {rating}
            </div>
          </div>
        </div>

        {/* Room Details */}
        <div className="mt-2">
          <p className="text-sm font-semibold">{primaryRoom?.roomType}</p>
          <p className="text-xs text-gray-600">
            1x king size bed • 1x bathroom
          </p>
        </div>

        {/*  Price + CTA */}
        <div className="flex justify-between items-center mt-3">
          <div>
            <button className="text-xs border px-2 py-1 rounded-full text-blue-600 border-blue-500 mr-2">
              #Hot Deal
            </button>
            <button className="text-xs border px-2 py-1 rounded-full text-blue-600 border-blue-500">
              #Popular
            </button>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">₹{price}</p>
            <p className="text-xs text-gray-500">3 nights, {guest} guests</p>

            <Button variant="contained">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilteredHotelsCard;
