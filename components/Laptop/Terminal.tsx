"use client"
import React, { useState, useEffect } from 'react';
import { TerminalPages } from '@/constants';
import { TerminalItemType } from '@/types';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import "../styles.css";
import SkillCard from './SkillCard';
import useTimer from '@/hooks/useTimer';


function getFormattedDate() {
  const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date: Date = new Date();
  const dayName: string = days[date.getDay()];
  const monthName: string = months[date.getMonth()];
  const day: number = date.getDate();
  const hours: String = String(date.getHours()).padStart(2, '0');
  const minutes: String = String(date.getMinutes()).padStart(2, '0');
  const seconds: String = String(date.getSeconds()).padStart(2, '0');

  return `${dayName} ${monthName} ${day} ${hours}:${minutes}:${seconds}`;
}

const Terminal = () => {

  const [currDate, setCurrDate] = useState<string>(getFormattedDate());
  const [index, setIndex] = useState<number>(0);
  const [terminal, setTerminal] = useState<TerminalItemType[] | null>(null);
  const [finishedRender, setFinishedRender] = useState<boolean>(false);
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  const descriptionTime = 70; // 70ms per character in the description
  const ratingTime = 50; // 50ms per character in the rating

  const [text] = useTypewriter({
    words: [TerminalPages[index].command],
    loop: false,
    typeSpeed: 40,
  });

  // Used To Update Time Live
  useTimer({
    time: 1000,
    handleNext: () => { setCurrDate(getFormattedDate()) }
  })

  // Used To Determine When The Initial Command Is Finished Rendering
  useEffect(() => {
    if (text === TerminalPages[index].command) {
      setTerminal(TerminalPages[0].items);
    }
  }, [text]);

  // Used To Determine When The Render is Complete for the >>> Page Command
  useEffect(() => {
    if (terminal != null) {
      // Determine Which Skill Card Will Take the Longest To Render
      let maxTime: number = 0;

      {
        terminal?.map((item: TerminalItemType) => {
          maxTime = Math.max(maxTime, item.description.length * descriptionTime + item.rating.length * ratingTime);
        })
      }
      maxTime += 2000; // 2 second buffer added

      // Waiting MaxTime Before Rendering >>> Page Command...
        // Can't use custom hook because you can't use a useEffect in a useEffect
      const timer = setTimeout(() => {
        setFinishedRender(true);
      }, maxTime);
  
      return () => clearTimeout(timer);
    }
  }, [terminal]);


  // Handle Going To The Next Terminal Page
  const handleNextPage = (e: React.MouseEvent<HTMLDivElement>) => {
    if (finishedRender) {
      setFinishedRender(false);
      setIndex(prevIndex => (prevIndex + 1) % TerminalPages.length);
    }
  }
  useEffect(() => {
    setTerminal(TerminalPages[index].items);
  }, [index]);


  return (
    <div className="applicationWindow terminal-container ">
      <div className="flex flex-row items-center terminal-header">
        <div className="flex flex-row items-center">
          <div className="icon bg-red-400 " />
          <div
            className="icon bg-yellow-400"
            onClick={() => setFullScreen(false)}
          />
          <div
            className="icon bg-green-400"
            onClick={() => setFullScreen(true)}
          />
        </div>
        <div className="flex-grow text-center terminal-title">
          ethanrng-site Terminal
        </div>
      </div>

      <div
        className="terminal-content h-full"
        onClick={handleNextPage}
      >
        <div>Last login: {currDate} on console</div>

        {/* Command Being Typed */}
        <div className="command-line">
          user@terminal:~$ { } {text}
          <span className='animate-fadeInOut'><Cursor cursorBlinking={false} /></span>
        </div>

        {/* Result of Command */}
        {terminal &&
          <div className='flex flex-row items-center h-[70%]'>
            {terminal.map((item: TerminalItemType, index: number) => {
              return (
                <SkillCard
                  key={index}
                  descriptionTime={descriptionTime}
                  ratingTime={ratingTime}
                  item={item}
                />
              )
            })}
          </div>
        }

        {/* Show Only When a Command Has Just Been Typed */}
        {finishedRender &&
          <span>
            {`>> Page ${index + 1} of ${TerminalPages[index].items.length}: `}
            <i><span className='animate-fadeInOut'>{`<click anywhere to continue>`}</span></i>
          </span>
        }
      </div>
    </div>
  );
};

export default Terminal;