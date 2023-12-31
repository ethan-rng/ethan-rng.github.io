"use client"
import React, { useState, useEffect } from 'react';
import { ProjectItems } from '@/constants';
import { ProjectWorkType } from '@/types';
import ProjectCard from '../../components/(projects)/ProjectCard';

export default function Projects() {
  const [renderedItems, setRenderedItems] = useState<ProjectWorkType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < ProjectItems.length) {
      const timer = setTimeout(() => {
        setRenderedItems(items => [...items, ProjectItems[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, 200 * currentIndex + 1); 

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className={`bg-tertiary/90 z-30 px-32 pt-32 ${renderedItems.length == 0 || renderedItems.length ==  1 ? "py-[500rem]": ""} flex flex-col`}>
      <h1 className='text-4xl font-bold text-white'>
        <u>Featured Projects</u>
      </h1>

      <div className='pb-10'>
        {renderedItems.map((item, index) => (
          <div className='animate-slideleft' key={index}>
            <ProjectCard key={index} projectItem={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
