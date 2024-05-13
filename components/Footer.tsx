"use client"
import React from 'react';
import { FooterItems } from '@/constants';
import Link from 'next/link';
import { FooterType } from '@/types';
import useIsDarkMode from '@/hooks/useIsDarkMode';
import useIsMobile from '@/hooks/useIsMobile';

const Footer = () => {
    const isDark = useIsDarkMode();
    const isMobile = useIsMobile();


    return (
        <div
            id="contact"
            className="w-4/5 h-full terminal-font "
        >
            {/* Vertical Line */}
            <div className='w-full h-2 bg-primary dark:bg-font rounded-full'/>

            <div className='flex flex-row justify-stretch'>
                {/* Let's Connect and Copyright */}
                <div className="flex flex-col w-1/2 text-darkFont dark:text-font text-1xl sm:text-3xl py-6">
                    <h1> Let's Connect :) </h1>
                    <h1> Copyright © {new Date().getFullYear()} Ethan Rong </h1>
                </div>

                {/* Social Icons */}
                <div className="flex justify-end w-1/2 items-center ">
                    {FooterItems.map((item: FooterType, index: number) => {
                        return (
                            <div key={index} className="mx-2 sm:ml-4">
                                <Link href={item.link}>
                                    {item.component({ 
                                        fill: isDark ? "#515050" : "white" ,
                                        size: isMobile ? 3 : 4,
                                    })}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div >
    );
};

export default Footer