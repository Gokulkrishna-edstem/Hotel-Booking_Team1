import React from "react";
import SearchLocation from "./SearchLocation";

function DisplayBanner({ className }) {
  return (
    <>
      <div className=" h-[300px]">
        <div className={`container mx-auto ${className} relative `}>
          <div className="w-11/12 h-[250px] mx-auto flex flex-col items-center justify-center rounded-xl relative overflow-hidden ">
            <div className="absolute inset-0 bg-[url('/images/Bedroom-interior.jpg')] bg-cover bg-center brightness-50"></div>

            <h1 className="text-4xl font-bold text-white relative z-10">
              Book your stay with CozyNest
            </h1>
            <p className="tracking-widest text-white relative z-10">
              1,480,086 rooms around the world are waiting for you!
            </p>
          </div>
          <SearchLocation className={"absolute inset-x-0 -bottom-7"} />
        </div>
      </div>
    </>
  );
}

export default DisplayBanner;
