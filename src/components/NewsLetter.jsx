import React from "react";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

function NewsLetter({ className }) {
  return (
    // main div
    <div
      className={`w-11/12  flex justify-self-center justify-evenly h-[100px] rounded-2xl ${className} items-center shadow-2xl mb-8 `}
    >
      {/* first div for icon */}
      <div className="w-[8%] flex justify-center ">
        <FontAwesomeIcon icon={faNewspaper} size="4x" />
      </div>
      {/* second div */}
      <div className=" w-[65%]">
        <h1 className="font-bold text-xl">Pssst!</h1>
        <p className="text-lg">
          Do you want to get secret offer and best price for amazing stays ?{" "}
          <br />
          Sign up to join our travel Club!
        </p>
      </div>
      {/* third div for button */}
      <div className=" p-5">
        <Button variant="outlined">Sign up for Newsletter</Button>
      </div>
    </div>
  );
}

export default NewsLetter;
