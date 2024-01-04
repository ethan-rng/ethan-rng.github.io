"use client"
import React, { useState, useEffect } from 'react';
import { terminalText } from '@/constants';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import "../styles.css";

function getFormattedDate() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = new Date();
  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${dayName} ${monthName} ${day} ${hours}:${minutes}:${seconds}`;
}

const Terminal = () => {
  const [currDate, setCurrDate] = useState(getFormattedDate());
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrDate(getFormattedDate());
    }, 1000);
    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  const [text] = useTypewriter({
    words: [terminalText],
    loop: false,
    typeSpeed: 80,
  });

  return (
    <div className='terminal-container border-4 border-blue-300 rounded-lg w-full h-full z-40'>
      {/* TERMINAL HEADER */}
      <div className='flex flex-row items-center terminal-header'>
        <div className='flex flex-row items-center'>
          <div className='rounded-full bg-red-400 h-3 w-3 mr-3' />
          <div 
            className='rounded-full bg-yellow-400 h-3 w-3 mr-3' 
            onClick={() => setFullScreen(false)}
          />
          <div 
            className='rounded-full bg-green-400 h-3 w-3 mr-3' 
            onClick={() => setFullScreen(true)}
          />
        </div>
        <div className='flex-grow text-center terminal-title'>ethanrng-site Terminal</div>
      </div>

      {/* TERMINAL CONTENT */}
      <div className='terminal-content'>
        <div>Last login: {currDate} on console</div>
        {/* Static command-line text for simulation */}
        <div className='command-line'>user@terminal:~$ { } {text} <Cursor cursorBlinking={false} /> </div>
        <div className='animate-fadeInOut ml-5'>
          <i>{text === terminalText && "<Press Enter to Continue>"}</i>
        </div>

      </div>
    </div>
  )
}

export default Terminal;
