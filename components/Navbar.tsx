"use client"
import React, { useState, useEffect } from 'react';
import { NavBarType } from '@/types';
import { NavBarItems, logoImage } from "@/constants";
import Image from 'next/image';
import Link from 'next/link';
import Toggle from "./Toggle/Toggle";
import useIsMobile from '@/hooks/useIsMobile';

interface NavBarIconsProps {
    isMobile?: boolean;
    handleClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: string) => void;
    currentId: string;
}

const NavBarIcons = ({ isMobile = false, handleClick, currentId }: NavBarIconsProps) => {
    const textSize = isMobile ? "text-5xl" : "text-xl";
    const bubbleSize = isMobile ? "p-2 mr-8" : "p-1 mr-2";

    return (
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row justify-between w-full '}`}>
            {NavBarItems.map((item: NavBarType, index: number) => (
                <Link
                    key={index}
                    href={item.link}
                    className={`group flex items-center justify-center h-full hover:text-darkTertiary hover:dark:text-darkTertiary text-white dark:text-black ${isMobile && "my-16"}`}
                    onClick={(e) => handleClick(e, item.text)}
                >
                    {/* 
                        ARCHIVED
                        <div className={`${currentId === item.text && `rounded-full ${bubbleSize} bg-darkTertiary`} group-hover:bg-darkTertiary bg-white dark:bg-black group:bg-darkTertiary`}/>
                    */}
                        <p className={`${textSize}`}>{item.text}</p>
                </Link>
            ))}
        </div>
    );
};

const Navbar = () => {
    const [currentId, setCurrentId] = useState("Home");
    const [darkMode, setDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const isMobile = useIsMobile();
    const [menuOpen, setMenuOpen] = useState(false);

    {/* Determines if page is scrolled to set opacity of navbar */}
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: string) => {
        if (isMobile) {
            setMenuOpen(!menuOpen);
        }
        e.preventDefault();
        setCurrentId(item);
        window.location.href = e.currentTarget.href;
    };

    return (
        <div className={`fixed w-full sm:w-4/5 z-30 ${darkMode ? 'dark:bg-secondary' : 'bg-darkSecondary'} ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'} ${isScrolled ? 'dark:bg-opacity-90' : 'dark:bg-opacity-100'} ${(isScrolled && !darkMode) ? 'dark:bg-opacity-90' : 'dark:bg-opacity-100'} flex justify-between items-center rounded-3xl py-4 px-4 mt-16 sm:mt-0`}>
            <Link className="flex items-center space-x-4" href="/">
                <Image
                    src={darkMode ? logoImage.dark : logoImage.light}
                    width={50}
                    height={35}
                    alt="logo"
                />
            </Link>

            <div className='hidden sm:flex sm:items-center sm:justify-between sm:w-1/2'>
                <NavBarIcons handleClick={handleClick} currentId={currentId} />
            </div>

            {!isMobile ? (
                <div className='hidden sm:block'>
                    {/* Non Mobile Version*/}
                    <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            ) : (
                <>
                    {/* Mobile View */}
                    <div className='flex items-center lg:hidden'>
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-8xl mr-4 -mt-4 text-white dark:text-black">
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </div>

                    {menuOpen && (
                        <div className='fixed inset-0 z-50 flex flex-col justify-center items-center bg-black dark:bg-white bg-opacity-90'>
                            <NavBarIcons isMobile={true} handleClick={handleClick} currentId={currentId} />
                            {/* Toggle Dark/Light Mode */}
                            <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Navbar;
