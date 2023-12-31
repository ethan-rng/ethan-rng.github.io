import React from 'react';
import { FooterItems } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { FooterType } from '@/types';


const Footer = () => {
  return (
    <div className='flex justify-between items-center px-32'>
      <div className='flex flex-col text-white space-y-2 text-3xl py-6 '>
        <h1> Let's Connect :) </h1>
        <h1> Copyright © {new Date().getFullYear()} Ethan Rong </h1>
      </div>

      <div className='flex flex-row-reverse justify-end items-center'>
        {FooterItems.map((item: FooterType, index: number) => {
          return (
            <div key={index} className='ml-4'>
              <Link href={item.link}>
                <Image
                  alt="social media"
                  src={item.image}
                  width={60}
                  height={60}
                />
              </Link>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default Footer