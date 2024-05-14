// For Logo and Hero Page
export type ImageType = {
    light: string
    dark: string
} 



// NavBar
export type NavBarType = {
    text: string;
    link: string;
}


// About Type
export type AboutType = {
    header: string;
    description: string;
}

// Terminal Item Type
export type TerminalItemType = {
    name: string;
    image: string;
    rating: string;
    description: string;
}

// TerminalPageType
export type TerminalPageType = {
    name: string;
    items: TerminalItemType[];
    command: string;
}

// HobbyItemType
export type HobbyItemType = {
    name: string;
    varName: string;
    imageCount: number;
    imageRoute: string;
    description: string;
}


// Experience Timeline Type
export type ExperienceTimelineType = {
    title: string;
    description: string;
    tags?: string[];
    image: string;
    date: string;
    hoverText: string;
}

// Carousel Card Type
export type CarouselCardType = {
    name: string;
    image: string;
}

// Project Type
export type ProjectType = {
    name: string;
    image: string;
    shortDescription: string;
    longDescription: string;
    tags: string[];
    link: string;
}

// Footer Type
export type FooterType = {
    platform: string;
    link: string;
    light: string;
    dark: string;
    component: React.FC<any>;
}

// Footer
export type SVGType = {
    fill: string;
    className: string;
    size: number;
}