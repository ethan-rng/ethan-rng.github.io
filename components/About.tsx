"use client"
import React, { useState, createContext } from 'react';
import Laptop from './Laptop/Laptop';
import { aboutMe } from "@/constants"
import { AboutType } from '@/types';
import ArrowDown from "@/public/assets/icons/ArrowDown";
import ArrowUp from "@/public/assets/icons/ArrowUp";
import "./styles.css";

interface FileType {
    currFolder: string;
    currFileIndex: number;
    setCurrFolder: (newColderName: string) => void;
    setCurrFileIndex: (newFileIndex: number) => void;
}
const OpenedFileContext = createContext<FileType | undefined>(undefined);


const About = () => {
    const [folderOpen, setFolderOpen] = useState<boolean>(false);
    const [folder, setFolder] = useState<string>("");
    const [fileIndex, setFileIndex] = useState<number>(0);

    const contextValue: FileType = {
        currFolder: folder,
        currFileIndex: fileIndex,
        setCurrFolder: setFolder,
        setCurrFileIndex: setFileIndex,
    }

    const handleClick = (header: string) => {
        if(folderOpen){
            folder === header ? setFolderOpen(false) : setFolder(header);
        }else{
            setFolder(header);
            setFolderOpen(true);
        }
    }

    return (
        <div 
            className='                
                flex flex-row justify-center items-center rounded-b-3xl bg-darkTertiary
                w-full sm:w-4/5 
                landscape:h-auto landscape:sm:py-32
                h-[75vh] sm:h-[45vh]
            '
            id="about"
        >
            <div className='flex flex-col sm:flex-row items-center sm:items-start sm:w-5/6'>                
                {/* About Content */}
                <div className='w-4/5 sm:w-1/3'>
                    <h1 className='textFont dark:text-darkFont text-5xl font-bold'>About Me</h1>
                    
                    <div>
                        {aboutMe.map((item: AboutType, index: number) => {
                            return (
                                <div key={index} className='flex flex-col text-2xl cursor-pointer'>
                                    <div
                                        className='py-6'
                                        onClick={() => handleClick(item.header.toLowerCase())}
                                    >
                                        <div
                                            className='flex flex-row justify-between font-semibold text-2xl pb-3 text-white/60'
                                            onClick={() => contextValue.setCurrFolder("")}
                                        >
                                            {item.header}
                                            {contextValue.currFolder === item.header.toLowerCase() ? <ArrowUp /> : <ArrowDown />}
                                        </div>

                                        <div className='text-xl text-white'>
                                            {(contextValue.currFolder === item.header.toLowerCase() && folderOpen) &&
                                                <>
                                                    {item.description}
                                                </>
                                            }
                                        </div>
                                    </div>

                                    {/* No Vertical Bar for Hobbies */}
                                    {item.header != "Hobbies" && <div className='bg-darkSecondary py-[0.8px] w-full rounded-full' />}
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Laptop Component */}
                <div className='w-full sm:w-2/3 flex items-end justify-end'>
                    <OpenedFileContext.Provider value={contextValue}>
                        <Laptop folderOpen={folderOpen} setFolderOpen={setFolderOpen} />
                    </OpenedFileContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default About
export { OpenedFileContext };
export type { FileType };
