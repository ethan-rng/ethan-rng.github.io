"use server"
import React from 'react';
import { aboutBanner, headshotImage, laptop } from '@/constants';
import Image from "next/image";
import Arrow from '@/components/shared/Arrow';
import "../globals.css";
import dynamic from 'next/dynamic';


const page = () => {
  const LaptopWithNoSSR = dynamic(
    () => import('@/components/ui/About/Laptop'),
    { ssr: false }
  );
  return (
    <div className='min-h-screen bg-secondary'>
      {/* HERO BACKGROUND IMAGE
        <div
          className="absolute mt-[5rem] inset-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        */}

      {/* HEADSHOT IMAGE AND HERO TEXT */}
      <div className='relative w-full flex flex-col items-center justify-center'>
        {/* Background */}
        <div className='z-0'>
          <Image
            src={aboutBanner}
            alt="about banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />

        {/* Desktop Version */}
        <div className='hidden sm:flex items-center justify-center mt-[6rem] sm:mt-[12rem]'>
          <div className='relative rounded-full border-8 border-secondary mr-10'>
            <Image
              className='rounded-full'
              src={headshotImage}
              alt="Headshot"
              width={500}
              height={600}
            />
            <div className="absolute inset-0 rounded-full bg-black bg-opacity-[0.3] " />
          </div>
          <div className='relative -mt-4'>
            <h1 className=' text-white/85 animate-slideleft text-7xl greatVibes'> A brief intro  </h1>
            <h1 className=' text-white/85 animate-slideleft text-7xl greatVibes'> into <b>who am I... </b></h1>
            <h1 className='text-white/85 animate-slideleft mt-6 text-5xl greatVibes'> As a techie, I am very passionate about</h1>
            <h1 className='text-white/85 animate-slideleft mt-6 text-5xl greatVibes'> sharing my journey with others</h1>
            <h1 className='text-white/85 animate-slideleft mt-6 text-3xl greatVibes'> Scroll down to find out more! </h1>
          </div>
        </div>

        {/* Mobile Version */}
        <div className='flex flex-col items-center justify-center sm:hidden mt-[6rem] sm:mt-[12rem]'>
          <div className='relative rounded-lg border-8 border-secondary'>
            <Image
              src={headshotImage}
              alt="Headshot"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-black bg-opacity-[0.3] " />
          </div>
          <div className='relative mt-4 text-center sm:text-left'>
            <h1 className=' text-white animate-slideleft text-5xl sm:text-7xl greatVibes'> Hi once again! </h1>
            <h1 className='text-white animate-slideleft mt-6 text-3xl sm:text-5xl greatVibes'> As a techie, I am very passionate about</h1>
            <h1 className='text-white animate-slideleft mt-6 text-3xl sm:text-5xl greatVibes'> sharing my journey with others</h1>
            <h1 className='text-white animate-slideleft mt-6 text-2xl sm:text-3xl greatVibes'> Scroll down to find out more! </h1>
          </div>
        </div>

        <Arrow target="skills" />
      </div>

      {/* Divider */}
      <div className='h-[10rem] bg-primary' id="skills" />

      {/* Hobbies */}
      <div className='pt-3 mb-32 w-full flex flex-col sm:flex-row border-0 border-orange-400 '>
        {/* Text Container */}
        <div className='sm:w-1/4 w-full flex-col items-center pr-6 border-r-2 border-r-white justify-center pt-16 text-white text-right greatVibes'>
          <p className='text-7xl'>Welcome to My</p>
          <p className='text-7xl pb-5'>Digital Workspace</p>
          <p className='text-6xl'>Come Explore</p>
          <p className='text-6xl'>My Skills and</p>
          <p className='text-6xl'>Hobbies</p>
        </div>

        <LaptopWithNoSSR />
        
      </div>


    </div >
  )
}


export default page