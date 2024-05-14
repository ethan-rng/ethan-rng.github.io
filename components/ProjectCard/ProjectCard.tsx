import React from 'react';
import { ProjectType } from '@/types';
import { Image } from '@chakra-ui/react';


interface ProjectCardProps {
  project: ProjectType;
  leftOrRight: string;
}
const ProjectCard = ({ project, leftOrRight }:  ProjectCardProps) => {
  return (
    <div 
      className={`border-[#565757] dark:border-font ${leftOrRight === "left" ? "animate-slideleft" : "animate-slideright"} text-pretty hover:scale-105 w-80 h-auto min-h-96 py-6 m-3 p-3 flex flex-col bg-darkPrimary/30 dark:bg-primary border-2 rounded-3xl overflow-hidden transition-transform duration-300 ease-in-out`}
      onClick={() => window.open(project.link)}
    >
      <h1 className='text-darkFont dark:text-font font-extrabold text-3xl mb-2'>{project.name}</h1>
      <p className='text-darkFont/80 dark:text-font font-medium text-lg my-2 text-pretty'>{project.shortDescription}</p>
      <Image
        src={project.image}
        className="rounded-lg object-cover h-40 mb-4"
        alt="Project image"
      />
      <div className={`flex flex-row flex-wrap items-center justify-center gap-2 ${project.image.endsWith(".svg") && "-mt-8"}`}>
        {
          project.tags.map((tag: string, index: number) => (
            <div
              key={index}
              className={`border-[#575757] border-[0.5px] rounded-2xl px-3 py-1 text-darkFont text-center bg-darkSecondary dark:bg-secondary hover:dark:bg-darkTertiary hover:dark:text-white hover:dark:border-[#575757] hover:dark:border-[0.5px] dark:text-font hover:scale-105 hover:bg-darkTertiary transition-ease hover:text-white hover:border-white/80 dark:hover:border-[#575757] transition duration-500`}
            >
              <p className='w-full text-base'>{tag}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectCard;
