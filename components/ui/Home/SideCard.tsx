"use server"
import React from 'react';
import type { HeroCardType } from '@/types';
import Link from 'next/link';
import { Image, Box } from "@chakra-ui/react";

type MyComponentProps = {
    homePageInfo: HeroCardType;
    side: string
}

const SideCard: React.FC<MyComponentProps> = ({ homePageInfo, side }) => {
  return (
    <div>

        
    </div>

  )
}

export default SideCard