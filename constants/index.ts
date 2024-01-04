import { NavBarType, HeroCardType, ProjectWorkType, FooterType, TerminalItemType, HobbyItemType, TerminalPageType } from "../types"

// NavBar
export const logoImage = "/assets/images/Logos/logoTransparent.png";
export const NavBarItems: NavBarType[] = [
    { text: "ABOUT", link: "/about" },
    { text: "EXPERIENCE", link: "/experience" },
    { text: "PROJECTS", link: "/projects" },
    { text: "RESUME", link: "/assets/documents/Ethan_Rong.pdf" },
]


// DEFINING HERO PAGE
// Hero Elements
export const heroImage: string = "/assets/images/Backgrounds/banner.JPG"
export const headshotImage: string = "/assets/images/Headshots/headshot.JPG"
export const descriptions: string[] = ["Programmer", "Web Developer", "Data Scientist"]
export const arrowPNG: string = "/assets/images/icons/arrowIcon.png"
export const heroCards: HeroCardType[] = [
    { name: "Experiences", direction: "left", link: "/experience", image: "/assets/images/Cards/experience.jpeg", description: "A combination of my workplace projects and my experience pitching ideas at case comps."}, 
    { name: "Projects", direction: "right", link: "/projects", image: "/assets/images/Cards/project.png", description: "Side projects that I've worked on at hackathons and in my free-time."},
]


// DEFINING ABOUT ME PAGE
// About banner
export const aboutBanner: string = "/assets/images/About/banner.JPG";

// terminal UI Element
export const terminalText: string = "cat /Users/ethan/Desktop/skills.md"
const languages: TerminalItemType[] = [
    { name: "Python", image: "/assets/images/Icons/python.png" },
    { name: "Javascript", image: "/assets/images/Icons/javascript.png" },
    { name: "Java", image: "/assets/images/Icons/java.png" },
];
const devTools: TerminalItemType[] = [
    { name: "Typescript", image: "/assets/images/Icons/typescript.png" },
    { name: "Next.js", image: "/assets/images/Icons/javascript.png" },
    { name: "MERN Stack", image: "/assets/images/Icons/mern.png" },
]
const aiTools: TerminalItemType[] = [
    { name: "Pandas", image: "/assets/images/Icons/python.png" },
    { name: "Tensorflow", image: "/assets/images/Icons/javascript.png" },
    { name: "Java", image: "/assets/images/Icons/java.png" },
]

export const TerminalPages: TerminalPageType[] = [
    { name: "languages📙.sh", items: languages },
    { name: "devTools ⚙️.sh", items: devTools },
    { name: "aiTools 🤖.sh", items: aiTools },
]

// finder UI Element
const foodImgs: string[] = []
const gymImgs: string[] = []
const travelImgs: string[] = []
const foodDescrip: string = ""
const gymDescrip: string = ""
const travelDescrip: string = ""

export const hobbies: HobbyItemType[] = [
    {name: "Food 🍕.md", varName: "1", images: foodImgs, description: foodDescrip},
    {name: "Da Gym 🏋️.md", varName: "2", images: gymImgs, description: gymDescrip},
    {name: "Travelling 🛫.md", varName: "3", images: travelImgs, description: travelDescrip},
];


// DEFINING PROJECT HOME PAGE
const norishNowDescrip = "norishNow is a friendly and intuitive web app designed to help shine a light on the issue of food scarcity in the US. Powered by React JS and a machine learning model, it not only forecasts food program demands but also suggests recipes for users living in various states based on common local ingredients. To accomplish these tasks norishNow leverages the power of a predictive modelling by using a Long Short Term Memory (LSTM) model and trained on data sourced from Kaggle resulting in 2nd in the Zero Hunger Hack category at Maple-Hacks 2023.";
const spotifyBotDescrip = "spotifyBot is a versatile, full-stack web application that merges Spotify streaming with .mp3 file downloading, along with an integrated music player. On spotifyBot, users can download their favourite Spotify playlists as local .mp3 files through the Spotify SDK and YouTube API and listen to their music on a shuffle feature which personalizes recommendation using machine learning. To build this, spotifyBot’s UI was coded using React-JS while its backend is made using a combination of a Flask API and a locally hosted MySQL database.";
const hoverTouchDescrip = "hoverTouch is a touchless software application that ingeniously turns your index finger into a virtual stylus. This app allows users to write in the air, effortlessly converting these finger-written notes into typed text or audio with image recognition and Text-to-Speech (TTS) technology. Before being analyzed by the Google Vision and TTS APIs, each note is refined through a specialized image masking process. Developing HoverTouch was a pivotal experience for me, marking my first hackathon experience which resulted in 4th place at Hack Western 9.";

const nourishNowImgs: string[] = [
    "/assets/images/Projects/norishNow/home.jpg",
    "/assets/images/Projects/norishNow/predictions.jpg",
    "/assets/images/Projects/norishNow/recipe.jpg",
    "/assets/images/Projects/norishNow/texas.jpg",
]
const spotifyBotImgs: string[] = [
    "/assets/images/Projects/spotifyBot/cover.jpg",
    "/assets/images/Projects/spotifyBot/hero.jpg",
    "/assets/images/Projects/spotifyBot/playlist.jpg",
];
const hoverTouchImgs: string[] = [
    "/assets/images/Projects/HoverTouch/handtracker.jpg",
    "/assets/images/Projects/HoverTouch/handwritting.jpg",
    "/assets/images/Projects/HoverTouch/logo.jpg",
];

const nourishNowTags: string[] = [
    "Tensorflow/Keras",
    "Pandas",
    "AI/ML",
    "Data Processing",
    "LSTM Neural Networks"
];
const spotifyBotTags: string[] = [
    "React-JS",
    "Tailwinds CSS",
    "Restful APIs",
    "Flask",
    "MySQL"
];
const hoverTouchTags: string[] = [
    "Python",
    "OpenCV",
    "GCP Vision",
    "Arduino Nano",
    "Text-to-Speech API"
];

export const ProjectItems: ProjectWorkType[] = [
    { name: "nourishNow", description: norishNowDescrip, images: nourishNowImgs, tags: nourishNowTags, link: "/projects/nourishNow", externalLink: "https://devpost.com/software/norishnow" },
    { name: "spotifyBot/Jankify", description: spotifyBotDescrip, images: spotifyBotImgs, tags: spotifyBotTags, link: "/projects/spotifyBot", externalLink: " https://github.com/ethan-rng/spotifyBot" },
    { name: "hoverTouch", description: hoverTouchDescrip, images: hoverTouchImgs, tags: hoverTouchTags, link: "/projects/hoverTouch", externalLink: "https://devpost.com/software/hovertouch" },
]


// DEFINING EXPERIENCE PAGE
const OPSImgs: string[] = [
    ""
];

const OPSTags: string[] = [
    ""
];


export const WorkItems: ProjectWorkType[] = [
    { name: "Ontario Public ", description: "", images: OPSImgs, tags: OPSTags, link: "/experience/ontarioPublicService", externalLink: "https://github.com/LTCinterns2023/resumeML" },
];


// DEFINING INDIVIDUAL PAGES
// Case Comps
export const caseComp: ProjectWorkType[] = [

]

// OPS
export const ontarioPublicService: ProjectWorkType[] = [

]

// nourishNow
export const nourishNow: ProjectWorkType[] = [

]

// spotifyBot
export const spotifyBot: ProjectWorkType[] = [

]

// Hover-Touch
export const hoverTouch: ProjectWorkType[] = [

]

// Footer
import Email from "../public/assets/icons/Email";
import Instagram from "../public/assets/icons/Instagram";
import Github from "../public/assets/icons/Github";
import Discord from "../public/assets/icons/Discord";
import Linkedin from "../public/assets/icons/Linkedin";

const email = "/assets/images/SocialMedia/email.svg";
const instagram = "/assets/images/SocialMedia/instagram.svg";
const github = "/assets/images/SocialMedia/github.svg";
const discord = "/assets/images/SocialMedia/discord.svg";
const linkedIn = "/assets/images/SocialMedia/linkedin.svg";

export const FooterItems: FooterType[] = [
    { platform: "Email", link: "mailto:ethan.rong@gmail.com", image: email, normalColor: "white", color: "#7eeda5", component: Email},
    { platform: "Instagram", link: "https://www.instagram.com/ethan.rng/", image: instagram, normalColor: "white", color: "#ed7edb", component: Instagram},
    { platform: "GitHub", link: "https://github.com/ethan-rng", image: github, normalColor: "white", color: "#a57eed", component: Github},
    { platform: "Discord", link: "https://discordapp.com/users/theallknowing.", image: discord, normalColor: "white", color: "#7ea0ed", component: Discord},
    { platform: "LinkedIn", link: "https://www.linkedin.com/in/ethanrong2004/", image: linkedIn, normalColor: "white", color: "#0b65c2", component: Linkedin},
]

