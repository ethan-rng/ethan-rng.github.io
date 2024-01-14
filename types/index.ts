// NavBar
export type NavBarType = {
    text: string;
    link: string;
}

// HeroCard Type
export type HeroCardType = {
    name: string;
    direction: string;
    link: string;
    image: string;
    description: string;
}

// TerminalItemType
export type TerminalItemType = {
    name: string;
    image: string;
    rating: string;
    description?: string;
}
// TerminalPageType
export type TerminalPageType = {
    name: string;
    items: TerminalItemType[];
}

// HobbyItemType
export type HobbyItemType = {
    name: string;
    varName: string;
    images: string[];
    description: string;
}

// Projects and/or Work Type
export type ProjectWorkType = {
    name: string;
    description: string;
    images: string[];
    tags: string[];
    link: string;
    externalLink?: string;
}

// Project Type
export type ProjectType = {}

// Experience Type
export type ExperienceType = {}

// Footer Type
export type FooterType = {
    platform: string;
    link: string;
    image: string;
    normalColor: string;
    color: string;
    component: React.FC<any>;
}