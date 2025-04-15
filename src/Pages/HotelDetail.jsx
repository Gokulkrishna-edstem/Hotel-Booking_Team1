import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getHotels } from "../services/apiHotel";
import RoomsDisplayCard from "../components/RoomsDisplayCard";
import Rating from "../components/Rating";

function HotelDetail() {
  const { id } = useParams();
  const hotel = useLoaderData();
  const details = hotel[id - 1];
  const roomImages = details.roomImages;

  return (
    <>
      {/* Room Images Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-11/12 mx-auto mt-8">
        {roomImages.map((img, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden ${
              index === 0 ? "col-span-2 sm:col-span-1 sm:row-span-2" : ""
            }`}
          >
            <img
              className={`w-full object-cover ${
                index === 0 ? "h-[300px] sm:h-[413px]" : "h-[200px]"
              }`}
              src={img}
              alt={`room image ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Hotel name and rating */}
      <div className="w-11/12 mx-auto px-4 mt-6 mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="w-full md:w-2/3">
          <h1 className="font-bold text-xl mb-2 text-slate-800">
            {details.name}
          </h1>
          <p className="text-sm text-slate-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            possimus aperiam labore eum iure sed. Perferendis suscipit quisquam
            iure! Molestiae voluptates nostrum.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-start md:justify-end">
          <Rating rating={details.rating} width="70px" />
        </div>
      </div>

      {/* Property Overview */}
      <div className="w-11/12 mx-auto p-4 md:p-6 rounded-xl">
        <h1 className="text-lg font-bold text-slate-700 mb-4">
          Property Overview
        </h1>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {details.room.map((room, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md w-full sm:w-[48%] lg:w-[30%] min-w-[250px]"
            >
              <h2 className="text-md font-semibold mb-2">{room.roomType}</h2>
              <ul className="flex flex-wrap gap-2">
                {room.amenities.map((amenity, i) => (
                  <li
                    key={i}
                    className="bg-slate-200 px-3 py-1 rounded-full text-sm text-slate-800"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Rooms List */}
      <div className="bg-slate-50 py-8">
        <div className="w-11/12 mx-auto">
          <h1 className="font-bold text-lg text-slate-500 mb-5">Rooms</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.room.map((room) => (
              <RoomsDisplayCard
                key={room.roomType}
                hotelId={details.id}
                hotelName={details.name}
                hotelLocation={details.location}
                hotelrating={details.rating}
                hotelImage={details.image}
                roomType={room.roomType}
                roomImage={room.room_image}
                description={room.description}
                availability={room.availability}
                price={room.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function fetchASingleHotel() {
  const hotel = await getHotels();
  return hotel;
}

export default HotelDetail;
