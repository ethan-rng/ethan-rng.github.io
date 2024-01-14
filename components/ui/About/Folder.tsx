"use client"
import React, { useState, useEffect } from 'react'
import "../styles.css"
import Terminal from './Terminal';
import { TerminalPages, hobbies } from '@/constants';
import { HobbyItemType } from '@/types';
import Markdown from './Markdown';
import Powerpoint from './Powerpoint';

type MyComponentProps = {
  setFolderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Folder: React.FC<MyComponentProps> = ({ setFolderOpen }) => {
  const [currFile, setFile] = useState(0);
  const [currFolder, setFolder] = useState(new Set());
  const [lastOpened, setLastOpened] = useState("about");

  return (
    <div className='relative flex flex-row bg-white rounded-lg border-2 border-black/70 my-4 animate-maximize h-[95%]'>
      {/* FOLDERS LIST*/}
      <div className="bg-[#CFCFD1]/80 pr-8  text-black roboto p-2 flex flex-col ">
        <div>
          <div className='flex flex-row items-center'>
            <div 
              className='rounded-full bg-red-400 h-2 sm:h-3 w-2 sm:w-3 mr-3' 
              onClick={() => {setFolderOpen(false)}}
            />
            <div 
              className='rounded-full bg-yellow-400 h-2 sm:h-3 w-2 sm:w-3 mr-3' 
              onClick={() => {setFolderOpen(false)}}
            />
            <div className='rounded-full bg-green-400 sm:h-3 h-2 sm:w-3 w-2 mr-3' />
          </div>
          <div className='pt-3 sm:pt-5 pb-2'> <b><u>Favorites</u></b> </div>

          <div>
            <div className='w-16 sm:w-64'>
              {/* ABOUT */}
              <div
                className='py-0.5'
                onClick={() => {
                  const newFolder = new Set(currFolder);
                  if (currFolder.has("about")) {
                    newFolder.delete("about");
                  } else {
                    newFolder.add("about");
                  }
                  setFolder(newFolder);
                  setLastOpened("about");
                }}
              >🗂️ About Me</div>
              <div className={`py-0.5 ${currFolder.has("about") && "hidden"}`}>
                <div
                  className={`pl-4 sm:pl-8 py-0.5 ${(currFile === 0 && lastOpened === "about") && "rounded-lg bg-[#C3C3C5]/95"}`}
                  onClick={() => {
                    setFile(0);
                    setLastOpened("about");
                  }}
                >
                  README.md
                </div>
              </div>

              {/* SKILLS */}
              <div
                className='py-0.5'
                onClick={() => {
                  const newFolder = new Set(currFolder);
                  if (currFolder.has("skills")) {
                    newFolder.delete("skills");
                  } else {
                    newFolder.add("skills");
                  }
                  setFolder(newFolder);
                  setLastOpened("skills");
                }}
              >🗂️ Skills
              </div>
              <div className={`py-0.5 ${currFolder.has("skills") && "hidden"}`}>
                <div
                  className={`pl-4 sm:pl-8 py-0.5 ${(currFile === 0 && lastOpened === "skills") && "rounded-lg bg-[#C3C3C5]/95"}`}
                  onClick={() => {
                    setFile(0);
                    setLastOpened("skills");
                  }}
                >
                  skills ⚙️.sh
                </div>
              </div>

              {/* HOBBIES */}
              <div
                className='py-0.5'
                onClick={() => {
                  const newFolder = new Set(currFolder);
                  if (currFolder.has("hobbies")) {
                    newFolder.delete("hobbies");
                  } else {
                    newFolder.add("hobbies");
                  }
                  setFolder(newFolder);
                }}
              >🗂️ Hobbies
              </div>
              <div className={`py-0.5 ${currFolder.has("hobbies") && "hidden"}`}>
                {hobbies.map((item: HobbyItemType, index: number) => {
                  return (
                    <div
                      className={`pl-4 sm:pl-8 py-0.5 ${(currFile === index && lastOpened === "hobbies") && "rounded-lg bg-[#C3C3C5]/95"}`}
                      onClick={() => {
                        setFile(index);
                        setLastOpened("hobbies");
                      }}
                      key={index}
                    >
                      {item.name}
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* FILES LIST */}
      <div className='w-full flex flex-col'>
        {/* Heading of Finder */}
        <div className='bg-[#F3F0EB]/80 roboto h-[8.6%] w-full flex flex-col items-center justify-center border-0 border-red-300'>
         
        </div>

        {/* File Generation */}
        <div
          className={` h-full relative flex items-center justify-center border-orange-300 border-0`}>
            {(lastOpened === "about" ) && <Markdown />}
            {(lastOpened === "skills" ) && <Terminal />}
            {(lastOpened === "hobbies" && currFile === 0) && <Powerpoint />}
            {(lastOpened === "hobbies"  && currFile === 1) && <Powerpoint />}
            {(lastOpened === "hobbies"  && currFile === 2) && <Powerpoint />}
        </div>


      </div>
      <div className="absolute inset-0 bg-black bg-opacity-[0.07] pointer-events-none" />

    </div>
  )
}

export default Folder