import React from "react";
import { rain, test, profile } from "../assets/images";

const Hero = () => {
  return (
    <div className="heroBg text-tertiary">
      <div className="flex flex-row pl-64 pt-16 mt-8">
        <img src={profile} className="w-128 h-128 rounded-lg" />
        <div className="pl-16 mr-32 pt-32 text-8xl lato">
          Hi There 👋! <br/>
          My Name Is <br/>
          Ethan Rong <br/> <br />

          I am a _____________
        </div>
      </div>
    </div>
  );
};

export default Hero;
