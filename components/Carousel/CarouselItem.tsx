import React, { useState } from 'react';

export interface CardProps {
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  children?: React.ReactNode;
}

export default function CarouselItem({ index, activeIndex, setActiveIndex, children }: CardProps) {
  const [scaled, setScaled] = useState<Boolean>(false);

  const offset = (index - activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);


  const cssTransformProperties = `
        rotateY(calc(${offset} * 55deg))
        scaleY(calc(1 +  ${absOffset}  * -0.5))
        translateX(calc( ${direction} * -3.5rem))
        translateZ(calc( ${absOffset} * -35rem))
    `;

  const cssOpacity = `
        ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}`;

  const cssDisplay = `
        ${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'},
  `;

  return (
    <div
      className="carousel-item"
      style={{
        transform: cssTransformProperties,
        opacity: cssOpacity,
        display: cssDisplay,
        zIndex: `${scaled ? 100 : 1}`,
      }}
      onClick={() => {
        activeIndex !== index
          ?
          setActiveIndex(index)
          :
          setScaled(!scaled);
      }}
    >
      {children}
    </div>
  );
}
