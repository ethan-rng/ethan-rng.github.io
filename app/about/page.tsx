import React from 'react';
import { languages, aboutBanner } from '@/constants';
import { Image } from "@chakra-ui/react";
import Arrow from '@/components/shared/Arrow';
import "../globals.css";
import dynamic from 'next/dynamic';

// To Handle Terminal and Folder Being Client Rendered Item
const TerminalWithNoSSR = dynamic(
  () => import('@/components/ui/About/Terminal'), 
  { ssr: false }
);

const FolderWithNoSSR = dynamic(
  () => import('@/components/ui/About/Folder'), 
  { ssr: false }
);


const page = () => {
  return (
    <div>
      {/* Hero Page */}
      <div className='relative w-full h-[60rem]'>
        <Image
          src={aboutBanner}
          alt="about banner"
          className='w-full h-full object-cover'
        />
        
        {/* Blur Effect Div */}
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
        
        {/* Blur Effect Div */}
        <div className="absolute inset-0 font-orbitron flex flex-col justify-center items-center h-full">
          <h1 className=' text-white animate-slideleft text-7xl abhayaLibre'> Hi There 👋 </h1>
          <h1 className='text-white animate-slideleft mt-6 text-5xl greatVibes'> As a techie, I am very passionate about</h1>
          <h1 className='text-white animate-slideleft mt-6 text-5xl greatVibes'> sharing my journey with others</h1>
          <h1 className='text-white animate-slideleft mt-6 text-3xl greatVibes'> Scroll down to find out more! </h1>
          <div className='absolute bottom-16'>
            <Arrow target="skills" />
          </div>
        </div>
      </div>


     <div className='h-[10rem] bg-secondary'/>
      {/* Hobbies Section */}
      <div className='sm:px-32 pt-[10rem]' id='skills'>
        <h2 className='text-5xl text-white abhayaLibre py-3'> Outside of software, I have man hobbies/interests. Let's see if we have any in common</h2>
        <FolderWithNoSSR />
      </div>
    </div>
  )
}

export default page