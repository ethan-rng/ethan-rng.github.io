import { ExperienceTimelineType } from '@/types'
import useIsMobile from '@/hooks/useIsMobile'
import React, { use } from 'react'

const DescriptionCard = ({ timelineItem }: { timelineItem: ExperienceTimelineType }) => {
  const isMobile: boolean = useIsMobile();

  return (
    <div className={`flex flex-col w-full sm:w-1/3 text-pretty bg-darkPrimary dark:bg-primary rounded-b-3xl sm:rounded-3xl py-4 px-8`}>

      <h1 className='font-extrabold mt-5 text-3xl'>{timelineItem.title} | {timelineItem.date}</h1>
      {isMobile && <div className='border-full w-full bg-darkTertiary h-2 mt-2 mb-1 rounded-full'/>}
      <p className='font-light ml-3 mt-2'>{timelineItem.description}</p>

      <div className='w-full mt-3 flex flex-row items-center justify-center flex-wrap'>
        {timelineItem.tags?.map((tag: string, index: number) => {
          return (
            <div 
              key={index}
              className='
              border-[1px] border-[#575757] dark:border-font rounded-3xl px-4 py-1 mx-2 my-2 
              text-darkFont dark:text-font bg-darkSecondary dark:bg-secondary 
              hover:bg-darkFont dark:hover:bg-font dark:hover:text-secondary transition-ease hover:text-darkSecondary hover:border-darkSecondary/80 dark:hover:border-secondary/80 transition duration-500 ' 
            >
                {tag}
            </div>        
          )
        })}
      </div>
    </div>
  )
}

export default DescriptionCard