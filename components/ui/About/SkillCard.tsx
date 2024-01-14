"use client"
import { TerminalItemType } from '@/types';
import React, { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/react';
import { Typewriter } from 'react-simple-typewriter'

type MyComponentProps = {
  componentsFinished: React.Dispatch<React.SetStateAction<number>>;
  item: TerminalItemType;
}

const SkillCard: React.FC<MyComponentProps> = ({ componentsFinished, item }) => {
  const [typingFinished, setTypingFinished] = useState<boolean>(false);

  // Used to Determine When Description Done Typing
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

  // Used to Determine When The Entire Component Done Typing
  useEffect(() => {
    if (typingFinished) {
      const typingDuration = item.rating.length * 50; // 70ms is the typeSpeed
      const delayForTyping = typingDuration + 1000; // Added a buffer of 1000ms

      const timeoutId = setTimeout(() => {
        componentsFinished((prev) => prev + 1);
      }, delayForTyping);

      return () => clearTimeout(timeoutId);
    }
  }, [typingFinished])

  return (
    <div key={item.name} className="w-1/3 h-[95%] mx-2 border-blue-300 border-dashed border-2 flex flex-col items-center animate-grow">
      <div className="flex justify-center h-2/3 w-full border-0 border-orange-400">
        <Image
          src={item.image}
          className="w-32 h-32 mt-8"
          alt='terminal item'
        />
      </div>

      <div className="h-1/3 w-full font-bold text-center flex flex-col border-0 border-r-400">
        <b>
          <p>{item.name}</p>
        </b>
        <div className='text-red-300 font-thin'>
          <Typewriter
            words={[item.description ?? ""]}
            loop={false}
            typeSpeed={70}
            key={item.name}
          />
        </div>

        {typingFinished &&
          <div
            className="text-green-300 flex flex-row text-center w-full justify-center font-bold border-white border-0"
          >
            <Typewriter
              words={[item.rating ?? ""]}
              loop={false}
              typeSpeed={50}
              key={item.name}
            />
          </div>
        }
      </div>
    </div>
  );
};

export default SkillCard