"use client"
import React, { useState } from 'react';
import "./styles.css";
import { Typewriter } from 'react-simple-typewriter'
import { README_Header, README_Intro, README_Skills, README_Hobbies } from "@/constants";


const Markdown = () => {
  return (
    <div className='applicationWindow markdown-container'>
      {/* Markdown Header */}
      <div className="flex flex-row text-start markdown-header">
        <div className="ml-2 flex-grow text-start terminal-title">
          <i>Users/ethan/README.md</i>
        </div>
      </div>

      {/* Divider */}
      <div className='border sm:border-2 border-blue-300 w-full' />

      {/* Markdown Content */}
      <div className='flex items-center justify-center sm:border-2 border-[#A7A7AB]-300 mx-2 my-4 border-dashed h-full'>
        <div className='flex flex-col text-bold text-[#A7A7AB] h-[95%] w-[95%] terminal-font'>
          <div className='xs:mb-3 markdown-text-header'>
            <Typewriter
              words={[README_Header]}
              typeSpeed={70}
              key={1}
            />
          </div>

          <div className='ml-3 markdown-text '>
            <Typewriter
              words={[README_Intro]}
              typeSpeed={30}
              key={1}
            />
          </div>

          <div className='markdown-text-header mt-4 '>
            <Typewriter
              words={["Skills"]}
              typeSpeed={200}
              key={1}
            />
          </div>

          <div className='markdown-text'>
            <Typewriter
              words={[README_Skills]}
              typeSpeed={30}
              key={1}
            />
          </div>

          <div className='markdown-text-header mt-4 '>
            <Typewriter
              words={["Hobbies"]}
              typeSpeed={200}
              key={1}
            />
          </div>

          <div className='markdown-text'>
            <Typewriter
              words={[README_Hobbies]}
              typeSpeed={30}
              key={1}
            />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Markdown