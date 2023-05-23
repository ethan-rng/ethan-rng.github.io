import React from "react";
import { logo } from "../assets/images";

const Banner = () => {
  return (
    <div className="flex flex-row">

      <div className="fixed z-20 w-full bg-primary pt-4 pb-4 pl-64 text-white oswald text-3xl flex flex-row justify-between">
        <p>ETHAN RONG | PORTFOLIO</p>  
        <a 
          href="../assets/resume/Ethan Rong Resume.pdf" 
          className="pr-64 hover:text-orange-100 transition-all"
        >
          <u> <p>RESUME</p> </u>
        </a>   
      </div>

      <div className="z-20 fixed p-0.5 w-full bg-tertiary mt-16" />
      
    </div>

  );
};

export default Banner;
