"use client"
import React from 'react';
import { FooterItems } from '@/constants';
import Link from 'next/link';
import { Image } from '@chakra-ui/react';
import { FooterType } from '@/types';

const Footer = () => {
  return (
    <div className="flex-col sm:flex sm:flex-row justify-between items-center sm:px-32 pb-2 pl-3 terminal-font bg-primary">
      <div className="flex flex-col text-white space-y-2 text-1xl sm:text-3xl py-6 ">
        <h1> Let's Connect :) </h1>
        <h1> Copyright © {new Date().getFullYear()} Ethan Rong </h1>
      </div>

      <div className="flex flex-row-reverse justify-end items-center">
        {FooterItems.map((item: FooterType, index: number) => {
          return (
            <div key={index} className="mx-2 sm:ml-4 hidden sm:block">
              <Link href={item.link}>
                <Image 
                  src={item.image}
                  className="sm:h-14 sm:w-14"/>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer