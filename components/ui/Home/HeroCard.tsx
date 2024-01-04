import React from 'react';
import type { HeroCardType } from '@/types';
import Link from 'next/link';
import { Image, Box } from "@chakra-ui/react";

type MyComponentProps = {
    homePageInfo: HeroCardType;
}

const HeroCard: React.FC<MyComponentProps> = ({ homePageInfo }) => {
  return (
    <Box
      as="div"
      className={`flex flex-col border-8 border-secondary ${homePageInfo.direction === "left" ? "animate-slideleft" : "animate-slideright"} mx-5 my-5 rounded-lg bg-white overflow-hidden`}
      maxW="full"
      w="full"
    >
      <Link href={homePageInfo.link}>
        <div className='text-black p-4 sm:p-6 flex justify-center items-center flex-col'>
          <Image
              src={homePageInfo.image}
              alt={homePageInfo.name}
              className='rounded-md sm:h-[30rem] sm:w-[40rem] w-full h-auto'
              objectFit="cover"
          />
          <h3 className='text-xl sm:text-4xl mt-4 mb-3'><u>{homePageInfo.name}</u></h3>
          <p className='sm:text-1xl'>{homePageInfo.description}</p>
        </div>
      </Link>
    </Box>
  )
}

export default HeroCard;
