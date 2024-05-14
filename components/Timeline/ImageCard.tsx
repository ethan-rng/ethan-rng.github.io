"use client"
import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';
import "./styles.css"

interface ImageCardProps {
  image: string,
  hoverText: string
}
const ImageCard = ({ image, hoverText }: ImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center rounded-t-3xl sm:rounded-3xl bg-darkPrimary dark:bg-primary w-full sm:w-3/5`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        className="h-5/6 sm:h-[90%] pt-6 sm:pt-0 w-11/12 rounded-lg"
        src={image}
        alt="Image"
      />
      {isHovered && (
        <div
          className="rounded-lg h-full sm:h-[90%] w-11/12 absolute flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-1000"
        >
          <span className='text-darkFont text-thin text-3xl text-center text-pretty mx-24'>{hoverText}</span>
        </div>
      )}
    </div>
  );
};

export default ImageCard;

