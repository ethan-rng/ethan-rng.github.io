"use client"
import React, { useState, createContext } from 'react';
import Carousel from "./Carousel/Carousel";
import { ProjectType } from '@/types';
import { CarouselCards, ProjectCards } from '@/constants';
import ProjectCard from './ProjectCard/ProjectCard';


const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(CarouselCards.length - 1);
  const [leftOrRight, setLeftOrRight] = useState("left");
  
  return (
    <div
      className='w-[90%] xs:w-4/5 h-[80%] flex flex-col items-center justify-center bg-darkSecondary dark:bg-secondary pb-10 mb-16 rounded-3xl'
      id="projects"
    >
        <div className='w-5/6 mt-10'>
          {/* Header */}
          <div className='w-full flex flex-col sm:flex-row justify-between text-darkFont dark:text-font'>
            <h1 className='text-5xl font-extrabold mt-3 sm:mt-0'>
              Get to know <br />my work
            </h1>
            <p className='font-thin text-base text-left mt-6 sm:mt-0 sm:text-right w-2/3 sm:w-1/4'>From hackathons, to personal side projects, there been a lot of random projects I’ve been a part of. Feel free to click any of the cards to checkout a devpost or GitHub link! </p>
          </div>

          {/* Carousel*/}
          <div className='flex items-center justify-center mb-8 sm:mb-0'>
            <Carousel
              name={CarouselCards[activeIndex].name}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              setLeftOrRight={setLeftOrRight}
              items={CarouselCards}
            />
          </div>
        </div>

        {/* Actual Projects */}
        <div className='flex flex-row flex-wrap items-center justify-center w-full h-full overflow-y-hidden'>
          {ProjectCards[activeIndex].map((item: ProjectType, index: number) => {
            return (
              <ProjectCard
                key={item.name + index}
                project={item}
                leftOrRight={leftOrRight}
              />
            );
          })}
        </div>
    </div>
  )
}

export default Projects