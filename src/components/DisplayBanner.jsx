import React from "react";
import SearchLocation from "./SearchLocation";

function DisplayBanner({ className, heading, subHeading, image }) {
  return (
    <>
      <div className=" h-[300px]">
        <div className={`container mx-auto ${className} relative `}>
          <div className="w-11/12 h-[250px] mx-auto flex flex-col items-center justify-center rounded-xl relative overflow-hidden ">
            <div
              className="absolute inset-0 bg-cover bg-center brightness-50"
              style={{ backgroundImage: `url(${image})` }}
            ></div>

            <h1 className="text-4xl font-bold text-white relative z-10">
              {heading}
            </h1>
            <p className="tracking-widest text-white relative z-10">
              {subHeading}
            </p>
          </div>
          <SearchLocation className={"absolute inset-x-0 -bottom-7 bg-white"} />
        </div>
      </div>
    </>
  );
}

export default DisplayBanner;
