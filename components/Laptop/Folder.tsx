"use client"
import React, { useState, useContext } from 'react'
import "./styles.css"
import Terminal from './Terminal';
import { hobbies } from '@/constants';
import { HobbyItemType } from '@/types';
import Markdown from './Markdown';
import Powerpoint from './Powerpoint';
import { OpenedFileContext } from '@/components/About';

interface FolderProps {
  setFolderOpen: (newOpenFolder: boolean) => void; 

}

const Folder = ({ setFolderOpen }: FolderProps ) => {
  const [openedFolders, setOpenedFolders] = useState<Set<string>>(new Set()); // Determine which folders are currently open in the "Fav. UI element"
  const ActiveFileContext = useContext(OpenedFileContext);

  // Adds or remove folders from openedFolders
  const handleFolderClick = (folderName: string) => {
    const newFolder = new Set(openedFolders);

    if (newFolder.has(folderName)) {
      newFolder.delete(folderName);
    } else {
      newFolder.add(folderName);
    }

    setOpenedFolders(newFolder);
    ActiveFileContext?.setCurrFolder(folderName);
  };

  const handleFileClick = (folderName: string, index: number) => {
    ActiveFileContext?.setCurrFolder(folderName);
    ActiveFileContext?.setCurrFileIndex(index);    
  };

  return (
    <div className='text-base sm:text-xxs relative flex flex-row bg-[#111111] dark:bg-white rounded-lg border-2 border-black/70 my-4 animate-maximize h-[95%] w-full'>
      {/* FOLDERS LIST*/}
      <div className="bg-[#333334] dark:bg-[#CFCFD1]/80 dark:text-black text-white roboto p-2 flex flex-col w-1/4">
        <div>
          {/* Delete, Minimize, and Maximize */}
          <div className='flex flex-row items-center'>
            <div 
              className=' bg-red-400 icon' 
              onClick={() => {setFolderOpen(false)}}
            />
            <div 
              className='bg-yellow-400 icon' 
              onClick={() => {setFolderOpen(false)}}
            />
            <div className='bg-green-400 icon' />
          </div>


          <div className='pt-2 sm:pt-3 pb-2'> <b><u>Favorites</u></b> </div>
          <div>
            <div className='w-[22rem] sm:w-64'>
              {/* ABOUT */}
              <div
                className='py-0.5 cursor-pointer'
                onClick={() => {handleFolderClick("about")}}
              >🗂️ About Me</div>
              <div className={`py-0.5 ${openedFolders.has("about") && "hidden"}`}>
                <div
                  className={`indent cursor-pointer ${(ActiveFileContext?.currFileIndex === 0 && ActiveFileContext?.currFolder === "about") && "rounded-lg bg-[#C3C3C5]/95"}`}
                  onClick={() => {handleFileClick("about", 0)}}
                >
                  README.md
                </div>
              </div>


              {/* SKILLS */}
              <div
                className='py-0.5 cursor-pointer'
                onClick={() =>{handleFolderClick("skills")}}
              >🗂️ Skills</div>
              <div className={`py-0.5 ${openedFolders.has("skills") && "hidden"}`}>
                <div
                  className={`cursor-pointer indent ${(ActiveFileContext?.currFileIndex === 0 && ActiveFileContext?.currFolder === "skills") && "rounded-lg bg-[#C3C3C5]/95"}`}
                  onClick={() => {handleFileClick("skills", 0)}}
                >
                  skills ⚙️.sh
                </div>
              </div>


              {/* HOBBIES */}
              <div
                className='py-0.5 cursor-pointer'
                onClick={() => {handleFolderClick("hobbies")}}
              >🗂️ Hobbies</div>
              <div className={`py-0.5 ${openedFolders.has("hobbies") && "hidden"}`}>
                {hobbies.map((item: HobbyItemType, index: number) => {
                  return (
                    <div
                      className={`cursor-pointer indent ${(ActiveFileContext?.currFileIndex === index && ActiveFileContext?.currFolder === "hobbies") && "rounded-lg bg-[#C3C3C5]/95"}`}
                      onClick={() => {handleFileClick("hobbies", index)}}
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
        <div className='bg-[#323233] dark:bg-[#F3F0EB]/80 roboto h-[8.6%] w-full flex flex-col items-center justify-center'>
          {/* Can add file name here if i wasn't so lazy */}
        </div>

        {/* File Generation */}
        <div
          className={` h-full relative flex items-center justify-center border-orange-300 border-0`}>
            {(ActiveFileContext?.currFolder === "about" ) && <Markdown />}
            {(ActiveFileContext?.currFolder === "skills" ) && <Terminal />}
            {(ActiveFileContext?.currFolder === "hobbies" && <Powerpoint {...hobbies[ActiveFileContext?.currFileIndex]} />)}
        </div>


      </div>

      {/* Filter Over the Whole Screen */}
      <div className="absolute inset-0 dark:bg-black dark:bg-opacity-[0.07] pointer-events-none" />
    </div>
  )
}

export default Folder