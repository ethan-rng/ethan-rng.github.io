"use client"
import React, { useState, useEffect } from 'react';
import { ProjectItems } from '@/constants';
import { ProjectWorkType } from '@/types';
import ProjectCard from '../../components/ui/Projects/ProjectCard';

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
    <div className={`${renderedItems.length == 0 || renderedItems.length ==  1 ? "py-[500rem]": ""}`}>
      <h1 className='text-4xl font-bold text-white text-center md:text-left md:pl-5'>
        <u>Featured Projects</u>
      </h1>

      <div className='pb-10'>
        {renderedItems.map((item: ProjectWorkType, index: number) => (
          <div className='animate-slideleft' key={index}>
            <ProjectCard key={index} projectItem={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
