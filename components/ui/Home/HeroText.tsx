"use client"
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { descriptions, FooterItems } from "@/constants";
import { Image } from '@chakra-ui/react';
import { FooterType } from '@/types';
import "../styles.css";

const HeroText = () => {
    const [text] = useTypewriter({
        words: [...descriptions],
        loop: true,
        typeSpeed: 200,
        deleteSpeed: 250,
    });

    return (
        <div className='flex flex-col items-center my-[8rem] justify-center animate-slidedown text-white text-4xl sm:text-7xl'>
            <h1 className='mb-3 abhayaLibre'>Hi There! </h1>
            <h1 className='mb-3 greatVibes'>My Name is Ethan Rong </h1>
            <h1 className='mb-9 greatVibes'>I am a { } <u>{text}</u> <Cursor /> </h1>
            <h1 className='text-white animate-slideleft mt-2 text-3xl greatVibes'> Scroll down to find out more! </h1>

            <div className='flex flex-row mt-6'>
                {FooterItems.map((item: FooterType, index: number) => {
                    return (
                        <div key={index} className='sm:mr-4'>
                            <a href={item.link}>
                                <Image
                                    src={item.image}
                                    className="h-[4rem] w-[4rem]"
                                />
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HeroText