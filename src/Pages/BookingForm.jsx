import React from "react";
import { useSelector } from "react-redux";
import Rating from "../components/Rating";

function BookingForm() {
  // getting datas from store
  const {
    hotelId,
    hotelName,
    hotelLocation,
    hotelrating,
    hotelImage,
    price,
    description,
  } = useSelector((state) => state.booking);

  console.log(
    hotelId,
    hotelName,
    hotelLocation,
    hotelrating,
    hotelImage,
    price
  );

  return (
    <>
      <div className=" contaienr w-11/12 flex justify-self-center mt-5 rounded-2xl p-5 bg-amber-200">
        {/* div for image  */}
        <div className="w-[500px] h-[250px]  rounded-2xl overflow-hidden">
          <img src={hotelImage} className="w-full h-full " alt="" />
        </div>
        {/* div for details */}
        <div className="flex flex-col w-full mx-4">
          {/* div for name and rating */}
          <div className=" w-full flex justify-between">
            {/* div for name */}
            <div className=" ">
              <h2 className="font-bold text-4xl">{hotelName}</h2>
              <p className="font-light">{description}</p>
            </div>
            <Rating rating={hotelrating} width={"100px"} />
          </div>
          {/* div for  */}
          <div className="bg-green-500 mt-5">
            <h4>{}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
