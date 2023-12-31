import React from 'react';
import { heroImage } from '@/constants';
import Image from 'next/image';

const About = () => {
  return (
    <div className="relative w-full h-[2300px]"> {/* Set the desired height */}
    <Image
      src={heroImage}
      alt="Banner"
      layout="fill" // Use fill layout without height and width props
      objectFit="cover" // This will cover the area while maintaining aspect ratio
      priority // This tells Next.js to preload the image on the initial load
    />
  </div>
  )
}

export default About

