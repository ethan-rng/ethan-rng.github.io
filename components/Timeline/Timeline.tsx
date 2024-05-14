"use client"
import React from 'react'
import ImageCard from './ImageCard';
import DescriptionCard from './DescriptionCard';
import { ExperienceTimelineType } from '@/types';
import "./styles.css";
import useIsMobile from '@/hooks/useIsMobile';

interface DescriptionCardProps {
  timelineItem: ExperienceTimelineType;
  key: number;
  isLeft: boolean; // Orientation of the Timeline
  isStart: boolean // Determines UI Component
}


const Timeline = ({ timelineItem, isLeft, isStart }: DescriptionCardProps) => {
  const isMobile: boolean = useIsMobile();

  // DON'T CHANGE UNLESS U WANNA SUFFER
  // Tried calculating appropriate rem values with a linear equation, 
  // Tried dynamically setting value using tailwinds (ie: ml-[${value}])
  // Tried using a hashmap and using tailwinds... (all didn't work)

  const marginClassName: string | undefined = (() => {
    switch (timelineItem.date) {
      case "Sep 2024 - Present":
        return "timeline1";
      case "Sep 2023 - May 2024":
        return "timeline2"
      case "May 2023 - Aug 2023":
        return "timeline3"
      case "November 2023":
        return "timeline4"
      case "Sep 2022 - Present":
        return "timeline5";
      default:
        return "timeline1";
    }
  })();

  /* Mobile View */
  if (isMobile) {
    return (
      <div className='flex flex-col w-full my-12 '>
        <ImageCard
          image={timelineItem.image}
          hoverText={timelineItem.hoverText}
        />      

        <DescriptionCard timelineItem={timelineItem}/>
      </div>
    )


  }
  /* Normal View */
  return (
    <div className="flex flex-row pb-8">
      {isLeft ? (
        <>
          <ImageCard
            image={timelineItem.image}
            hoverText={timelineItem.hoverText}
          />
        </>
      ) : (
        <>
          <DescriptionCard timelineItem={timelineItem} />
        </>
      )}

      {/* Timeline Component */}
      <div className="flex flex-col justify-center items-center mx-8">
        <div className="w-8 h-full flex flex-col justify-center items-center">
          {/* Weird Ball Thing */}
          {isStart && (
            <div className="p-4 bg-darkTertiary rounded-full" />
          )}
          <p
            className={`${marginClassName} vertical-text text-3xl dark:text-font `}
          >
            {timelineItem.date}
          </p>
          {/* Vertical Bar */}
          <div
            className={`h-[90%] -mt-10 w-2 ${isStart ? "rounded-b-full" : "rounded-full"
              } bg-darkTertiary `}
          />
        </div>
      </div>

      {!isLeft ? (
        <>
          <ImageCard
            image={timelineItem.image}
            hoverText={timelineItem.hoverText}
          />
        </>
      ) : (
        <>
          <DescriptionCard timelineItem={timelineItem} />
        </>
      )}
    </div>
  );
};

export default Timeline