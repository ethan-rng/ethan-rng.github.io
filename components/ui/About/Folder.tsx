"use client"
import React, { useState, useEffect } from 'react'
import "../styles.css"
import Terminal from './Terminal';
import { TerminalPages, hobbies } from '@/constants';
import { HobbyItemType, TerminalPageType, TerminalItemType } from '@/types';

const Folder = () => {
  const [currFile, setFile] = useState(0);
  const [currFolder, setFolder] = useState(new Set());
  const [lastOpened, setLastOpened] = useState("about");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const startDragging = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.dataTransfer.setDragImage(new Image(), 0, 0);
  };


  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    if (isDragging && e.clientX !== 0 && e.clientY !== 0) {
      setPosition({
        x: position.x + e.movementX,
        y: position.y + e.movementY,
      });
    }
  };


  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <div className='flex flex-row bg-white rounded-lg border-4 border-red-300 mb-32 animate-slideleft h-[40rem]'>
      {/* FOLDERS LIST*/}
      <div className="bg-[#CFCFD1]/80 pr-8  text-black roboto p-2 flex flex-col ">
        <div>
          <div className='flex flex-row items-center'>
            <div className='rounded-full bg-red-400 h-3 w-3 mr-3' />
            <div className='rounded-full bg-yellow-400 h-3 w-3 mr-3' />
            <div className='rounded-full bg-green-400 h-3 w-3 mr-3' />
          </div>
          <div className='pt-5 pb-2'> <b><u>Favorites</u></b> </div>

          <div>
            <div className='w-64'>
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
                  className={`pl-8 py-0.5 ${(currFile === 0 && lastOpened === "about") && "rounded-lg bg-[#C3C3C5]/95"}`}
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
                {TerminalPages.map((item: TerminalPageType, index: number) => {
                  return (
                    <div
                      className={`pl-8 py-0.5 ${(currFile === index && lastOpened === "skills") && "rounded-lg bg-[#C3C3C5]/95"}`}
                      onClick={() => {
                        setFile(index);
                        setLastOpened("skills");
                      }}
                      key={index}
                    >
                      {item.name}
                    </div>
                  )
                })}
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
                      className={`pl-8 py-0.5 ${(currFile === index && lastOpened === "hobbies") && "rounded-lg bg-[#C3C3C5]/95"}`}
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
        <div className='bg-[#F3F0EB]/80 p-7 w-full'>
        </div>

        {/* File Generation */}
        <div
          className='border-red-300 border-4 rounded-lg h-full relative'
          onDragOver={(e) => e.preventDefault()} // Necessary for onDrop to work
          onDrop={stopDragging}
        >
          {(lastOpened === "about" || lastOpened === "hobbies") ?
            <div>
              {currFile}
            </div>
            :
            <div
              className='absolute'
              draggable="true"
              onDragStart={startDragging}
              onDrag={onDrag}
              onDragEnd={stopDragging}
              style={{
                position: 'absolute',
                left: position.x,
                top: position.y
              }}
            >
              <Terminal />
            </div>
          }
        </div>


      </div>
    </div>
  )
}

export default Folder