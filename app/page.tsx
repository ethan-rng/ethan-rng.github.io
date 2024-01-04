import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { headshotImage, heroImage, heroCards } from '@/constants';
import "./globals.css";
import HeroCard from '@/components/ui/Home/HeroCard';
import HeroText from '@/components/ui/Home/HeroText';
import { HeroCardType } from '@/types';
import Arrow from '@/components/shared/Arrow';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative bg-gradient-to-b to-primary/90 via-indigo-400 from-tertiary/95">
      {/* HERO */}
      <div id="hero" className="mb-[20vh]">


        {/* HERO BACKGROUND IMAGE
        <div
          className="absolute mt-[5rem] inset-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        */}

        {/* HEADSHOT IMAGE AND HERO TEXT */}
        <div className='relative w-full mt-[10rem] sm:mt-[12rem] flex flex-col items-center justify-center z-10'>
          {/* Desktop Version */}
          <div className='hidden sm:flex items-center justify-center'>
            <div className='rounded-full border-8 border-secondary mr-10'>
              <Image
                className='rounded-full'
                src={headshotImage}
                alt="Headshot"
                width={500}
                height={200}
              />
            </div>
            <HeroText />
          </div>

          {/* Mobile Version */}
          <div className='flex flex-col items-center justify-center sm:hidden'>
            <div className='rounded-lg border-8 border-secondary'>
              <Image
                src={headshotImage}
                alt="Headshot"
                width={500}
                height={200}
              />
            </div>
            <div className='-mt-[6rem]'> 
              <HeroText />
            </div>
          </div>

          <Arrow target="work" />
        </div>

      </div>
      <div className='bg-tertiary w-full p-32 -mt-64'></div>
      {/* WORK */}
      <div
        id="work"
        className="flex flex-col items-centre -pt-10 md:pt-32 z-30 "
      >
        <div className='text-center text-white text-3xl sm:text-6xl pb-6 my-6 z-30 -mt-32 sm:mt-0'>
          <u>Some Stuff I've Been Up To</u>
        </div>

        <div className='flex flex-col lg:flex-row w-full h-[42em] mb-32'>
          {heroCards.map((item: HeroCardType, index: number) => (
            <HeroCard homePageInfo={item} key={index} />
          ))}
        </div>

      </div>

    </main>
  );
}


