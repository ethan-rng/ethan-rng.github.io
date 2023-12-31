"use client"
import React, { useState, useEffect } from 'react';
import { NavBarItems, logoImage } from "@/constants/index";
import Image from 'next/image';
import "./styles.css";
import { NavBarType } from '@/types';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <div className={`flex flex-col ${isScrolled ? 'bg-primary/80' : 'bg-primary'} text-white text-3xl navBar pt-2 fixed top-0 left-0 w-full z-20`}>
      <div className='flex items-center justify-between px-32'> 
        <div className='flex items-center'> 
          <a href="/" className='flex items-center'>
            <Image
              className='pr-2 py-3'
              src={logoImage}
              width={50}
              height={50}
              alt={"logo"}
            />
            <h1 className='py-2'> ETHAN-RNG </h1>
          </a>
        </div>

        <div className='flex'> 
          {NavBarItems.map((item: NavBarType, index: number) => (
            <div 
              key={index} 
              className='p-2 ml-4 text-white/80 hover:text-secondary/95 transition-colors duration-100'
            >
              <a
                href={item.link}
              >
                {item.text === "RESUME" ?
                  <u> {item.text} </u>
                  :
                  <> {item.text} </>
                }
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-secondary w-full h-2 rounded-sm mt-1'/>
    </div>
  )
}

export default NavBar;
