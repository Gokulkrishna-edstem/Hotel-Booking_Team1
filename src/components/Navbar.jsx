import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <div className="container bg-teal-50 h-[70px] flex ">
      <nav className=" w-full flex flex-row justify-between self-center">
        {/* --------- */}
        <div className="w-[20%]">
          <h1 className="text-xl font-extrabold flex justify-center items-center">
            CozyNest
          </h1>
        </div>
        <div className="w-[40%]">
          <ul className="flex justify-evenly">
            <li>
              <NavLink to="/">HomePage</NavLink>
            </li>
            <li>
              <NavLink to="/">Attraction</NavLink>
            </li>
            <li>
              <NavLink to="/">Popular</NavLink>
            </li>
          </ul>
        </div>
        {/* ----------- */}
        <div className="w-[20%] flex justify-evenly items-center">
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
