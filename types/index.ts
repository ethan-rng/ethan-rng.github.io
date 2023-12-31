// NavBar
export type NavBarType = {
    text: string;
    link: string;
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
}