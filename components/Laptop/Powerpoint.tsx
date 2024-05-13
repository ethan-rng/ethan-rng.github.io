"use client"
import React, { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/react';
import "./styles.css";
import { HobbyItemType } from '@/types';
import useTimer from '@/hooks/useTimer';

const Powerpoint = ( hobbyItem: HobbyItemType) => {
  const [currSlide, setCurrSlide] = useState<number>(1);
  
  const handleNextSlide = () => {
    setCurrSlide(((currSlide) % hobbyItem.imageCount)+1)
  }

  // Every 5 seconds change slides
  useTimer({
    time: 5000,
    handleNext: () => {handleNextSlide},
  })

  useEffect(() => {
    setCurrSlide(1);
  }, [hobbyItem])
  return (
    <div className='applicationWindow flex flex-col w-11/12 h-[85%] -mt-4 rounded-lg bg-slate-800 dark:bg-slate-500'>
      {/* Slide Content */}
      <div className="flex flex-row items-center rounded-t border-[0.25px] border-black pt-[0.2rem]">
        <div className="flex flex-row items-center pl-2">
          <div className="icon bg-red-400" />
          <div
            className="icon bg-yellow-400"
          />
          <div
            className="icon bg-green-400"
          />
        </div>
        <div className="flex-grow text-center text-white ">
        💻 Microsoft PowerPoint 2010
        </div>
      </div>

      {/* Slide Content */}
      <Image
        key={currSlide}
        className='animate-maximize'
        src={`${hobbyItem.imageRoute}slide${currSlide}.png`}
        onClick={handleNextSlide}
      />
      
      {/* Speaker Notes */}
      <div className='pb-16 pl-2'>
        <p className='text-red-400 font-semibold'>{`Slide ${currSlide} of ${hobbyItem.imageCount}`}</p>
        <p className='text-darkFont'>{`Speaker Notes: `}</p>
      </div>
    </div>
  )
}

export default Powerpoint


