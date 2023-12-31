import Image from 'next/image';
import { heroImage } from "../constants";
import About from "../components/(root)/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      {/* Pseudo-element for background image with semi-transparent overlay */}
      <div className="relative w-full h-full">
        {/* This div is positioned absolutely and contains the background image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        {/* Pseudo-element for semi-transparent background */}
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.5 }}></div>
        {/* Ensure the About component is not affected by the opacity */}
        <div className="relative z-10">
          <About />
        </div>
      </div>
    </main>
  );
}


