import React, { useState } from 'react';
import CarouselItem from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';
import "./styles.css"
import { IoIosArrowBack } from 'react-icons/io';
import { Image, useColorModeValue } from '@chakra-ui/react';
import { CarouselCardType } from '@/types';

export interface CarouselProps {
  name: string;
  activeIndex: number;
  setActiveIndex: (newActiveIndex: number) => void;
  setLeftOrRight: (direction: string) => void;
  items: CarouselCardType[];
}

export default function Carousel({ name, activeIndex, setActiveIndex, setLeftOrRight, items }: CarouselProps) {
  const darkModeColor = useColorModeValue('black', 'white');

  function handleNextItemBtn(prev: number) {
    const newIndex = prev + 1 < items.length ? prev + 1 : 0;
    setActiveIndex(newIndex);
    setLeftOrRight("left");
  }

  function handlePrevItemBtn(prev: number) {
    const newIndex: number = prev - 1 >= 0 ? prev - 1 : items.length - 1;
    setActiveIndex(newIndex);
    setLeftOrRight("right");
  }

  return (
    <div className='flex flex-col justify-center w-full text-center'>
      {/*
       Archived Feature 
      <p className='mt-16 -mb-12 text-font dark:text-darkFont text-3xl font-medium'>{name.split(":")[0]}</p> 
      */}
      <div className="relative carousel-container my-16 w-full max-h-full">

        <button
          className="carousel-btn-switch-card-left carousel-btn-switch-card"
          onClick={() => { handleNextItemBtn(activeIndex) }}
        >
          <IoIosArrowBack
            style={{
              color: darkModeColor,
            }} 
          />
        </button>

        {items?.map((item, index) => (
          <CarouselItem
            key={index}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <Image
              className="h-full w-full"
              src={item.image}
              alt={item.image}
            />
          </CarouselItem>
        ))}


        <button
          className="carousel-btn-switch-card-right carousel-btn-switch-card"
          onClick={() => { handlePrevItemBtn(activeIndex) }}
        >
          <IoIosArrowBack
            style={{
              transform: 'rotate(180deg)',
              color: darkModeColor,
            }}
          />
        </button>

        <div>
          <CarouselIndicator
            name={name}
            activeIndex={activeIndex}
            length={items.length}
            onSetActiveIndex={(activeIndex) => {
              setActiveIndex(activeIndex);
            }}
          />
        </div>
      </div>
    </div>
  );
}
