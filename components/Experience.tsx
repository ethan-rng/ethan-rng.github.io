import React from 'react';
import Timeline from './Timeline/Timeline';
import { ExperienceCards } from '@/constants';
import { ExperienceTimelineType } from '@/types';
import "./styles.css";

const Experience = () => {
  return (
    <div
      className='w-full bg-darkSecondary dark:bg-secondary text-darkFont dark:text-font flex flex-col items-center my-32 sm:my-16'
      id="experience"
    >
      <div className='w-9/12 mt-8'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col sm:flex-row justify-between mb-6'>
            <h1 className='text-start textFont text-5xl font-extrabold'>Some of <br />My Experience.</h1>
            <p className='textFont text-pretty sm:text-pretty font-thin text-2xl sm:text-base text-left sm:text-right w-full sm:w-1/4 -mt-6 sm:mt-0'>Throughout my time in university, there have been a lot of different hats I’ve worn. From freshman to now starting my third year as an HBA, here are some of the highlights!</p>
          </div>

          <div className='-mt-12 sm:mt-0'>
            {/* Timeline Components */}
            {ExperienceCards.map((item: ExperienceTimelineType, index: number) => {
              return (
                <Timeline
                  key={index}
                  timelineItem={item}
                  isLeft={index % 2 === 0}
                  isStart={index === 0}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience