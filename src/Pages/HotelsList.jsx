import React from "react";
import { useSelector } from "react-redux";
import { getHotels } from "../services/apiHotel";
import { Link, useLoaderData } from "react-router-dom";
import FilteredHotelsCard from "../components/FilteredHotelsCard";
import DisplayBanner from "../components/DisplayBanner";

function HotelsList() {
  const { location, checkIn, checkOut, guests } = useSelector(
    (state) => state.hotel
  );
  console.log(checkIn);
  const displayLocation = location;
  const hotels = useLoaderData();
  const filteredHotels = hotels.filter((hotel) =>
    hotel.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <>
      {/* <SearchLocation className={"bg-slate-50 mt-5 w-[80%]"} /> */}
      <DisplayBanner
        heading={"Stay in Style. Travel with Ease."}
        subHeading={
          "Explore top-rated stays, compare prices, and reserve your next getaway in just a few clicks."
        }
        image={
          "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <div className="flex flex-grow justify-center">
        {/* grid2 */}
        <div className="w-[80%]">
          {/* heading div  */}
          <div className="w-[95%] justify-self-center flex justify-between px-10 items-center mt-10">
            {/* div for details */}

            {filteredHotels.length >= 1 ? (
              <>
                <div>
                  <p className="text-sm">
                    {filteredHotels.length} results for{" "}
                  </p>
                  <h1 className="font-bold text-lg">
                    {displayLocation.charAt(0).toUpperCase() +
                      location.slice(1).toLowerCase()}
                    , {checkIn} - {checkOut}, 2 guest, 1 room{" "}
                  </h1>
                </div>
                {/* div for sorting  */}
                <div className="flex justify-center items-center ">
                  <button className=" rounded-4xl w-[80px] h-[30px] border flex justify-center items-center ">
                    <h4 className=" text-sm">Sort by </h4>
                  </button>
                </div>
              </>
            ) : (
              <div className=" w-full">
                <h1 className="font-bold text-lg text-center">
                  {" "}
                  Oops! no Hotels available at this location
                </h1>
                <p>
                  Unfortunately, we couldn't find any hotels at this location.
                  Please try modifying your search criteria or explore nearby
                  destinations.
                </p>
              </div>
            )}
          </div>
          {/* hotel Lists  */}
          {filteredHotels.map((hotel) => (
            <Link to={`/hotelDetail/${hotel.id}`}>
              <FilteredHotelsCard
                checkIn={checkIn}
                name={hotel.name}
                location={hotel.location}
                rating={hotel.rating}
                room={hotel.room}
                image={hotel.image}
                price={hotel.price}
                guest={guests}
              />
            </Link>
          ))}

          {/* ----- */}
        </div>
      </div>
    </>
  );
}

export async function fetchHotels() {
  const hotel = await getHotels();
  return hotel;
}

export default HotelsList;
