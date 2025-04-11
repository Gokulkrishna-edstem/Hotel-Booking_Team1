import React from "react";

function Rating({ rating, width }) {
  return (
    <div className="flex gap-3 justify-evenly items-center ">
      <h1 className="text-lg font-bold ">
        {(rating > 4 && "Excellent") ||
          (rating > 3 && "Average") ||
          (rating <= 3 && "Poor")}
      </h1>
      <div
        className={` ${
          (rating > 4 && "bg-green-400") ||
          (rating > 3 && "bg-yellow-300") ||
          (rating <= 3 && "bg-red-600")
        } h-[30px] flex justify-center items-center rounded-2xl`}
        style={{ width }}
      >
        <h1>{rating}</h1>
      </div>
    </div>
  );
}

export default Rating;
