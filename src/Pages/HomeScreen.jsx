// main imports
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

// style imports
import "../index.css";

// other imports
import { getHotels } from "../services/apiHotel";

// page imports
// import Navbar from "../components/Navbar";
import DisplayBanner from "../components/DisplayBanner";
import HotelDisplayCard from "../components/HotelDisplayCard";
import PopularDestination from "../components/PopularDestination";
import NewsLetter from "../components/NewsLetter";
// import Footer from "../components/Footer";

function HomeScreen() {
  const hotel = useLoaderData();
  console.log(hotel);
  return (
    <>
      {/* navbar */}
      {/* <Navbar /> */}

      {/* banner */}
      <DisplayBanner
        className={"mt-5"}
        heading={"Book your stay with CozyNest"}
        subHeading={"1,480,086 rooms around the world are waiting for you!"}
        image="/images/Bedroom-interior.jpg"
      />

      {/* normal text */}
      <h1 className="text-center text-xl font-bold mt-8">
        Popular Destinations
      </h1>

      {/* image grid  */}
      <PopularDestination className={"mt-10"} />

      {/* hotels list with rating condition */}
      <div className="w-full flex flex-col justify-center mt-12 mb-12">
        <div className="flex self-center flex-col ">
          <h1 className="text-center text-xl font-bold mt-3 mb-5">
            Hotels Loved by guests
          </h1>
          <div className="w-full grid grid-cols-5 gap-10 justify-center">
            {/* displaying hotels with rating above 4  */}
            {hotel
              .filter((hotel) => hotel.rating > 4.4)
              .slice(0, 5)
              .map((hotel) => (
                <Link to={`/hotelDetail/${hotel.id}`}>
                  <HotelDisplayCard
                    image={hotel.image}
                    price={hotel.price}
                    name={hotel.name}
                    location={hotel.location}
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* newsLetter */}
      <NewsLetter className={"mt-15"} />

      {/* footer */}
      {/* <Footer className={"mt-15"} /> */}
    </>
  );
}

// to get the data from api , then pass it to router in app.jsx as loader
export async function fetchHotels() {
  const hotel = await getHotels();
  return hotel;
}

export default HomeScreen;
