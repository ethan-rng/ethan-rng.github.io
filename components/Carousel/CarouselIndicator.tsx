import React from 'react';

export interface CarouselIndicatorProps {
  name: string;
  activeIndex: number;
  length: number;
  maxIndicatorVisible?: number;
  onSetActiveIndex: (index: number) => void;
}

export default function CarouselIndicator({
  name,
  activeIndex,
  length,
  maxIndicatorVisible = 4,
  onSetActiveIndex,
}: CarouselIndicatorProps) {
  const maxIndicator = length > maxIndicatorVisible ? maxIndicatorVisible : length;

  return (
    <div className='flex flex-row  pt-64'>
      <p className='text-sm text-darkFont dark:text-font italic'>{name}</p>
      <div className="carousel-indicator">
        {Array.from(Array(maxIndicator), (_, index) => {
          return (
            <div
              key={index}
              className={`carousel-indicator-dots
              ${activeIndex === length-index-1 ? 'w-4 opacity-100' : 'w-2 bg-gray-400'}`}
              onClick={() => {
                onSetActiveIndex(length-index-1);
              }}
            />
          );
        })}
      </div>
    </div>

  );
}
