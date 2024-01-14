"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { NavBarItems, logoImage } from "@/constants/index";
import { NavBarType } from '@/types';
import "../../app/globals.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`terminal-font fixed top-0 left-0 w-full z-50 ${isScrolled ? 'bg-primary/90' : 'bg-primary'} text-white`}>
      <div className='flex items-center justify-between p-4 lg:px-32'>
        <a href="/" className='flex items-center space-x-4'>
          <Image
            src={logoImage}
            width={50}
            height={50}
            alt="logo"
          />
          <span className='text-xl lg:text-3xl font-bold hover:text-tertiary/95'>ETHAN-RNG</span>
        </a>

        <div className='flex items-center lg:hidden'>
          <button onClick={toggleMenu} className="text-3xl">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className={`absolute lg:relative bg-primary text-2xl lg:bg-transparent top-14 left-0 lg:top-0 w-full lg:w-auto lg:flex flex-col lg:flex-row items-center lg:space-x-4 transition-all duration-300 ease-in ${menuOpen ? 'flex' : 'hidden'}`}>
          {NavBarItems.map((item: NavBarType, index: number) => (
            <a 
              key={index} 
              href={item.link}
              className={`block py-2 px-4 text-center lg:text-left text-white/80 hover:text-tertiary/95 transition-colors duration-100 
                ${item.text === "RESUME" ? 'border-2 rounded-md border-white/80 hover:border-tertiary/95' : ''} ${index === 0 ? 'mt-0' : 'mt-2 lg:mt-0'}`}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
      <div className='hidden lg:block bg-secondary w-full h-2 rounded-sm'/>
    </nav>
  )
}

export default NavBar;
