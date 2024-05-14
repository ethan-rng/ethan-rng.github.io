"use client"
import React, { useState } from 'react';
import { Image } from "@chakra-ui/react";
import Folder from "./Folder";
import { finder, laptop } from '@/constants';

interface LaptopProps {
    folderOpen: boolean;
    setFolderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Laptop = ({ folderOpen, setFolderOpen }: LaptopProps) => {
    const handleFolderOpen = () => {
        setFolderOpen(!folderOpen);
    }

    return (
        <div className="flex-1 text-[0.5rem] lg:text-sm sm:text-base relative">
            {/* Laptop Picture */}
            <Image
                src={laptop}
                alt="laptop"
                className='w-full'
            />

            {/* Overlay div (Main Menu) */}
            <div className="absolute border-red-400 border-0"
                style={{
                    top: '8%',
                    left: '13.2%',
                    right: '11.5%',
                    bottom: '12%'
                }}
            >
                <div
                    className="w-[13%] h-[20%] absolute flex flex-col text-white terminal-font text-xs items-center justify-center border-red-300 border-0"
                    onClick={handleFolderOpen}
                    style={{
                        top: '8%',
                        left: '13.2%',
                        right: '11.5%',
                        bottom: '12%'
                    }}
                >
                    <Image
                        src={finder}
                        alt="finder"
                        className='w-1/2 h-1/2'
                      
                    />
                    <div className='w-full border-0 border-red-300 text-xs text-center'>Click Me!</div>
                </div>
                {folderOpen ? <Folder setFolderOpen={setFolderOpen} /> : null}
            </div>
        </div>)
}

export default Laptop