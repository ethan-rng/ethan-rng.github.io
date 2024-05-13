"use client"
import { TerminalItemType } from '@/types';
import React, { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/react';
import { Typewriter } from 'react-simple-typewriter'

interface SkillCardProps {
  descriptionTime?: number;
  ratingTime?: number;
  item: TerminalItemType;
}

const SkillCard = ({ descriptionTime=70, ratingTime=50, item }: SkillCardProps) => {
  const [typingFinished, setTypingFinished] = useState<boolean>(false);

  // Used to Determine When Description Done Typing for Rating to Start
  useEffect(() => {
    setTypingFinished(false);

    if (item.description) {
      const typingDuration = item.description.length * 70; // 70ms is the typeSpeed
      const delayForTyping = typingDuration + 1000; // Added a buffer of 1000ms

      const timeoutId = setTimeout(() => {
        setTypingFinished(true);
      }, delayForTyping);

      return () => clearTimeout(timeoutId);
    }
  }, [item]);

  return (
    <div key={item.name} className="text-xxs sm:text-xs w-1/3 h-full mx-2 border-blue-300 border-dashed border-2 flex flex-col items-center justify-center animate-grow">
      <div className="flex justify-center h-2/5 w-full ">
        <Image
          src={item.image}
          className="w-3/4 h-3/4"
          alt='terminal item'
        />
      </div>

      <div className="h-1/3 pb-5 w-full font-bold text-center flex flex-col">
        <b>
          <p>{item.name}</p>
        </b>

        <div className=" flex flex-col justify-center">
          <div className='text-red-300 font-thin text-xxs'>
            <Typewriter
              words={[item.description ?? ""]}
              loop={false}
              typeSpeed={descriptionTime}
              key={item.name}
            />
          </div>
          
          {typingFinished &&
            <div className="text-green-300 flex flex-row text-center w-full justify-center font-bold">
              <Typewriter
                words={[item.rating ?? ""]}
                loop={false}
                typeSpeed={ratingTime}
                key={item.name}
              />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default SkillCard