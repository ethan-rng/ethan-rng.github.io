"use client"
import React, { useState, useEffect} from 'react'
import { Link } from 'react-scroll';

type MyComponentProps = {
    target: string;
}

const Arrow: React.FC<MyComponentProps> = ({ target }) => {
    const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const newOpacity = Math.max(1 - window.scrollY / 100, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
    return (
        <div>
            <Link
                to={target}
                smooth={true}
                duration={1200}
                className='mt-[5rem] flex flex-col items-center'
                style={{
                    opacity: opacity,
                    transition: 'opacity 0.5s ease-out',
                    visibility: opacity === 0 ? 'hidden' : 'visible'
                }}
            >
                <svg className="animate-bounce" xmlns="http://www.w3.org/2000/svg" height="75" width="75" viewBox="0 0 512 512" style={{ fill: 'white', opacity: '0.3' }}>
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
            </Link>
        </div>)
}

export default Arrow;