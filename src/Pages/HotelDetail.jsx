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
      {/* div for showing images */}
      <div className="grid grid-cols-3 grid-rows-2 gap-3 container w-11/12 justify-self-center mt-8">
        {roomImages.map((img, index) => (
          <div
            key={index}
            // if index is 0 then add row-span-2 to the classname
            className={` rounded-2xl overflow-hidden ${
              index === 0 ? "row-span-2" : ""
            }`}
          >
            <img
              // if index is 0 then add height 413px to the classname
              className={`w-full object-cover ${
                index === 0 ? "h-[413px]" : "h-[200px]"
              }`}
              src={img}
              alt={`room image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* hotel name  and rating  */}
      <div className="container w-11/12 justify-self-center items-center ps-3 h-[100px] mt-5 mb-11 flex justify-between rounded-2xl ">
        <div className=" w-[50%]">
          <h1 className="font-bold text-lg">{details.name}</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            possimus aperiam labore eum iure sed. Perferendis suscipit quisquam
            iure! Molestiae voluptates nostrum
          </p>
        </div>
        {/* rating */}
        <Rating rating={details.rating} width="70px" />
      </div>
      {/* hotel details */}
      <div className="w-11/12 justify-self-center p-6 rounded-xl">
        <h1 className="text-lg font-bold text-slate-700 mb-4">
          Property Overview
        </h1>

        <div className="flex flex-wrap gap-6">
          {details.room.map((room, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md w-[430px] min-w-[250px]"
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

      {/*  Rooms list */}
      <div className="bg-slate-50">
        <div className="w-11/12 mt-5 items-center flex justify-self-center">
          <h1 className="font-bold mt-5 ms-5 text-lg text-slate-500">Rooms</h1>
        </div>
        <div className=" w-11/12 h-[400px] grid grid-cols-3 items-center justify-self-center mb-8 gap-1">
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
    </>
  );
}

export async function fetchASingleHotel() {
  const hotel = await getHotels();
  return hotel;
}

export default HotelDetail;
