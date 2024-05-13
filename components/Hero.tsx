"use client"
import React, { useState, useEffect } from 'react'
import { Image, useModal } from '@chakra-ui/react';
import Link from "next/link";
import { FooterType } from '@/types';
import { FooterItems, heroImage } from '@/constants';
import { IoIosArrowBack } from 'react-icons/io';
import useTimer from '@/hooks/useTimer';
import useIsDarkMode from '@/hooks/useIsDarkMode';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [leftOrRight, setLeftOrRight] = useState<string>("left"); // Used to determine if handleLeft or handleRight was the last action done
  const fillColor = !useIsDarkMode() ? "white" : "#515050";

  const handleNextButton = () => {
    const newIndex: number = activeIndex + 1 < heroImage.length ? activeIndex + 1 : 0;
    setActiveIndex(newIndex);
    setLeftOrRight("left");
  }

  const handleBackButton = () => {
    const newIndex: number = activeIndex - 1 >= 0 ? activeIndex - 1 : heroImage.length - 1;
    setActiveIndex(newIndex);
    setLeftOrRight("right");
  }

  // Custom Hook That Will AutoRun handleNextButton After 20 Secs
  useTimer({
    time: 20000,
    handleNext: handleNextButton,
  });


  return (
    <div
      className={`
            flex flex-col items-center justify-center dark:bg-secondary bg-darkSecondary 
            w-full sm:w-4/5 
            rounded-t-3xl mt-64 sm:mt-48 md:mt-32 text-pretty
            
            ${/* Mobile Devices */ true}
            h-[40vh] ${/* Mobile Portrait mode */ true}
            landscape:sm:h-[100vh] ${/* Mobile Landscape mode*/ true}

            ${/* Tablet Devices */ true}
            md:h-[45vh] ${/* Tablet Portrait mode */ true}
            landscape:lg:h-[50vh] ${/* Tablet Landscape mode */ true}

            ${/* Laptops */ true}
            landscape:xl:h-[65vh] 
          `}
      id="home"
    >
      <div className='flex flex-row items-center justify-between w-5/6 h-4/5 '>
        {/* Text Side */}
        <div className='mr-5 sm:mr-10 flex flex-col justify-between w-3/5 h-ful'>
          {/* Header Items */}
          <div className='flex flex-col items-start justify-start w-full -mt-2 sm:mt-0'>
            <div className='textFont text-pretty sm:text-pretty dark:text-font font-bold'>
              Welcome to my site,<br />
              I am Ethan Rong - a Software Engineer based in Toronto.
            </div>

            <div className='text-white/60 dark:text-font/80 text-base xs:text-2xl sm:text-xl text-pretty sm:text-pretty'>
              My name is Ethan Rong and I am a third year CS/Ivey Business student from the University of Western Ontario with a focus on fullstack and artificial intelligence (AI).<br /><br />
              Feel free to connect with me on any of my socials, or continue scrolling!<br />
            </div>
          </div>

          <div className='flex flex-col justify-start items-end w-full'>
            {/* Resume Button */}
            <div className='flex justify-start w-full text-center '>
              <Link
                href="/assets/documents/Ethan_Rong.pdf"
                className="text-darkHighlight text-2xl hoverEffect"
              >
                Resume
              </Link>
            </div>

            {/* List of Icons */}
            <div className='flex flex-row mt-3 justify-start items-center w-full '>
              {FooterItems.map((item: FooterType, index: number) => {
                return (
                  <div key={index} className='mr-4'>
                    <Link href={item.link}>
                      {item.component({ fill: fillColor, size: 2 })}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>


        {/* Images */}
        <div className='w-3/5 sm:w-4/5 h-full flex flex-row justify-between items-center ml-3'>
          {heroImage[activeIndex].map((item: string, index: number) => {
            return (
              <Image
                key={item}
                className={`
                    ${index === 0 ? 'block' : 'hidden landscape:block'} xl:block ${/* Displays only one image in mobile */ true}
                    h-full 
                    landscape:md:h-[90%] 
                    landscape:lg:h-full

                    ${/* Mobile Devices */ true}
                    w-full ${/* Mobile Portrait mode*/ true}
                    landscape:sm:w-1/2 ${/* Mobile Landscape mode*/ true}

                    ${/* Tablets */ true}
                    md:h-4/5 ${/* Tablet Portrait mode*/ true}
                    landscape:lg:h-4/5 ${/* Tablet Landscape mode*/ true}
        
                    ${/* Laptops */ true}
                    landscape:xl:w-1/2 xl:w-1/2
                    landscape:xl:h-full

                    ${leftOrRight === "left" ? "sm:animate-slideleft" : "sm:animate-slideright"} 
                    ${index === 1 ? 'pl-8' : ''}
                `}
                src={item}
                alt={item}
              />
            )
          })}
        </div>
      </div>


      {/* Item Button */}
      <div className='hidden sm:flex sm:flex-row sm:border-0 sm:border-purple-400 sm:mt-10'>
        <button
          className="border-2 dark:border-darkSecondary rounded-full hover:scale-110 transition-transform duration-200"
          onClick={handleBackButton}
        >
          <IoIosArrowBack
            style={{
              color: fillColor,
            }}
          />
        </button>

        <div className='px-2 flex flex-row'>
          {heroImage.map((_: string[], index: number) => {
            return (
              <div
                className={`mx-2 p-1 px-2 dark:bg-font ${activeIndex === index ? "bg-white" : "bg-darkHighlight dark:bg-highlight"} rounded-full`}
                key={index}
                onClick={() => { setActiveIndex(index) }}
              />
            )
          })}
        </div>

        <button
          className={`border-2 dark:border-darkSecondary rounded-full hover:scale-110 transition-transform duration-200`}
          onClick={handleNextButton}
        >
          <IoIosArrowBack
            style={{
              color: fillColor,
              transform: 'rotate(180deg)',
            }}
          />
        </button>
      </div>
    </div>
  )
}

export default Hero

