import Image from 'next/image';
import { heroImage, heroCards } from '@/constants';
import "./globals.css";
import HeroCard from '@/components/ui/Home/HeroCard';
import { HeroCardType } from '@/types';
import Arrow from '@/components/shared/Arrow';
import HeroText from '@/components/ui/Home/HeroText';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      {/* Hero Page */}
      <div className='relative w-full h-[60rem]'>
        <Image
          src={heroImage} 
          alt="about banner"
          layout="fill" 
          objectFit="cover"
        />

        {/* Blur Effect Div */}
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />

        {/* Text and Stuff Div */}
        <div className="absolute inset-0 flex flex-col justify-center items-center h-full">
          <HeroText />
          <div className='absolute bottom-16'>
            <Arrow target="work" />
          </div>
        </div>
      </div>

      <div className='bg-primary w-full p-[6rem]'></div>

      {/* WORK */}
      {/* bg-gradient-to-b to-green-300/90 from-tertiary w-full */}
      <div
        id="work"
        className="flex flex-col -pt-10 md:pt-16 z-30 bg-secondary w-full"
      >
        <div className='text-center text-tertiary/80 text-3xl sm:text-6xl pb-2 my-6 pt-2 z-30 -mt-32 sm:mt-0 abhayaLibre'>
          <u>- MY PROFILE -</u>
        </div>

        <div className='flex flex-col justify-center lg:flex-row w-full h-[42em] mb-32'>
          {heroCards.map((item: HeroCardType, index: number) => (
            <HeroCard homePageInfo={item} key={index} />
          ))}
        </div>

      </div>

    </main>
  );
}


