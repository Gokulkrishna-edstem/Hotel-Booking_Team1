import React from "react";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

function NewsLetter({ className }) {
  return (
    <div
      className={`w-11/12 flex flex-col sm:flex-row justify-between justify-self-center items-center gap-4 sm:gap-0 sm:h-[100px] p-4 sm:p-0 rounded-2xl shadow-2xl mb-8 ${className}`}
    >
      {/* Icon */}
      <div className="flex justify-center sm:w-[8%]">
        <FontAwesomeIcon icon={faNewspaper} size="3x" />
      </div>

      {/* Text */}
      <div className="text-center sm:text-left sm:w-[65%]">
        <h1 className="font-bold text-lg sm:text-xl mb-1">Pssst!</h1>
        <p className="text-sm sm:text-base">
          Do you want to get secret offers and best prices for amazing stays?
          <br className="hidden sm:block" />
          Sign up to join our travel club!
        </p>
      </div>

      {/* Button */}
      <div>
        <Button
          variant="outlined"
          size="small"
          className="sm:text-base text-sm"
        >
          Sign up for Newsletter
        </Button>
      </div>
    </div>
  );
}

export default NewsLetter;
