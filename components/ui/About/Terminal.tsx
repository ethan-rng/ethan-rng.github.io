"use client"
import React, { useState, useEffect } from 'react';
import { terminalText1, terminalText2, terminalText3, TerminalPages } from '@/constants';
import { TerminalItemType } from '@/types';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import "../styles.css";
import SkillCard from './SkillCard';

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

const terminalTexts = [terminalText1, terminalText2, terminalText3];

const Terminal = () => {
  const [currDate, setCurrDate] = useState<string>(getFormattedDate());
  const [currIndex, setIndex] = useState<number>(0);
  const [currTerminal, setTerminal] = useState<TerminalItemType[] | null>(null);
  const [componentsFinished, setComponentsFinished] = useState<number>(0);
  const [renderFinished, setFinishedRender] = useState<boolean>(false);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  
  const [text] = useTypewriter({
    words: [terminalTexts[currIndex]],
    loop: false,
    typeSpeed: 40,
  });
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrDate(getFormattedDate());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (text === terminalTexts[currIndex]) {
      setTerminal(TerminalPages[0].items);
    }
  }, [text]);

  useEffect(() => {
    if (componentsFinished === TerminalPages[currIndex].items.length) {
      setComponentsFinished(0)
      setFinishedRender(true);
    }
  }, [componentsFinished])

  return (
    <div className="applicationWindow terminal-container ">
      <div className="flex flex-row items-center terminal-header">
        <div className="flex flex-row items-center">
          <div className="rounded-full bg-red-400 h-3 w-3 mr-3" />
          <div
            className="rounded-full bg-yellow-400 h-3 w-3 mr-3"
            onClick={() => setFullScreen(false)}
          />
          <div
            className="rounded-full bg-green-400 h-3 w-3 mr-3"
            onClick={() => setFullScreen(true)}
          />
        </div>
        <div className="flex-grow text-center terminal-title">
          ethanrng-site Terminal
        </div>
      </div>

      <div
        className="terminal-content h-full"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          setFinishedRender(false);
          let nextIndex = currIndex + 1;

          if (nextIndex === TerminalPages.length) { nextIndex = 0; }

          setIndex(nextIndex);
          const nextTerminal = TerminalPages[nextIndex];
          if (nextTerminal && nextTerminal.items.length > 0) {
            setTerminal(nextTerminal.items); 
          }

        }}
      >
        <div>Last login: {currDate} on console</div>

        {/* Command Being Typed */}
        <div className="command-line">
          user@terminal:~$ { } {text} 
          <span className='animate-fadeInOut'><Cursor cursorBlinking={false} /></span>
        </div>

        {/* Result of Command */}
        { currTerminal && 
          <div className='flex flex-row items-center h-3/5'>
            {currTerminal.map((item: TerminalItemType, index: number) => {
              return (
                <SkillCard componentsFinished={setComponentsFinished} item={item} key={index}/>
              )
            })}
          </div>
        }

        {/* Show Only When a Command Has Just Been Typed */}
        { renderFinished &&
          <div>
            {terminalTexts.includes(text) && `>> Page ${currIndex + 1} of ${TerminalPages[currIndex].items.length}: `}
            <i><span className='animate-fadeInOut'>{terminalTexts.includes(text) && `<click anywhere to continue>`}</span></i>
          </div>
        }
      </div>
    </div>
  );
};

export default Terminal;
