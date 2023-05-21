import React from "react";
import { logo } from "../assets/images";

const Banner = () => {
  return (
    <div className="flex flex-col">

      <div className="fixed z-20 w-full bg-primary p-4 pl-5 text-white oswald text-3xl">
        <p>ETHAN RONG | PORTFOLIO</p>     
      </div>
      <div className="z-20 fixed p-0.5 w-full bg-tertiary mt-16" />
      
    </div>

  );
};

export default Banner;
