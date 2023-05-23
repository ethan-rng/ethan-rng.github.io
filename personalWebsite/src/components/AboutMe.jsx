import React from "react";
import { aboutmephoto } from "../assets/images";

const AboutMe = () => {
  return (
    <div className="pl-64 pt-16 pr-64 bg-primary flex flex-row">
      <div className="flex flex-col w-screen">
        <div className="text-6xl pt-10 text-white lato">
          <u>About Me</u>
        </div>
        <div className="roboto text-3xl flex text-justify pt-8 pr-16">
          Hey! 
        
          
        

        </div>
      </div>
      <div>
        <img src={aboutmephoto} alt="aboutme" className="rounded-lg border-2 w-screen h-128 mb-16" />

      </div>
    </div>
  );
};

export default AboutMe;
