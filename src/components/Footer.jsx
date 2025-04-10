import React from "react";

function Footer({ className }) {
  return (
    <div
      className={`bg-yellow-50 h-[150px] flex justify-center items-center ${className}`}
    >
      <div className="flex justify-self-center w-[95%] justify-between">
        <div className=" flex flex-col  justify-center ">
          <h1 className="font-bold text-2xl">Tripster</h1>
          <p>The favourite hotel booking experience Since 1997!</p>
        </div>
        <div className="flex  h-full ">
          <ul className="text-sm">
            <li>Help</li>
            <li>FAQ</li>
            <li>Customer service </li>
            <li>How to guide </li>
            <li>Contact us </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
