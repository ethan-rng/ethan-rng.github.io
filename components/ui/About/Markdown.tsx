"use client"
import React, { useState } from 'react';
import "../styles.css";
import { Typewriter } from 'react-simple-typewriter'
import { README_Header, README_Intro, README_Skills, README_Hobbies } from "@/constants";


const Markdown = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  return (
    <div className='applicationWindow markdown-container'>
      {/* Markdown Header */}
      <div className="flex flex-row text-start markdown-header">
        <div className="ml-2 flex-grow text-start terminal-title">
          <i>VS Code | Users/ethan/Desktop/About/README.md</i>
        </div>
      </div>

      {/* Divider */}
      <div className='border-2 border-blue-300 w-full' />

      {/* Markdown Content */}
      <div className='flex items-center justify-center border-2 border-[#A7A7AB]-300 mx-2 my-4 border-dashed h-full'>
        <div className='flex flex-col text-bold text-[#A7A7AB] h-[95%] w-[95%] terminal-font'>
          <div className='font-bold text-lg mb-3 text-blue-300'>
            <u>
              <Typewriter
                words={[README_Header]}
                typeSpeed={70}
                key={1}
              />
            </u>
          </div>

          <div className='ml-3 markdown-text '>
            <Typewriter
              words={[README_Intro]}
              typeSpeed={30}
              key={1}
            />
          </div>

          <div className='markdown-text-header mt-4 text-blue-300'>
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

          <div className='markdown-text-header mt-4 text-blue-300'>
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