import { ImageType, NavBarType, AboutType, TerminalPageType, TerminalItemType, HobbyItemType, ProjectType, FooterType, CarouselCardType, ExperienceTimelineType } from "../types"

// DEFINING NAVBAR
export const logoImage: ImageType = {
    light: "/assets/images/Logos/lightLogo.png",
    dark: "/assets/images/Logos/darkLogo.png",
}
export const NavBarItems: NavBarType[] = [
    { text: "Home", link: "/#home" },
    { text: "About", link: "/#about" },
    { text: "Experience", link: "/#experience" },
    { text: "Projects", link: "/#projects" },
    { text: "Resume", link: "/assets/documents/Ethan_Rong.pdf" },
]
export const NavBarIds: string[] = [
    "home", "about", "experience", "projects"
]


// DEFINING HERO PAGE
export const heroImage: string[][] = [
    ["/assets/images/Hero/hero1.JPG", "/assets/images/Hero/hero2.JPG"],
    ["/assets/images/Hero/hero3.jpeg", "/assets/images/Hero/hero4.JPG"],
    ["/assets/images/Hero/hero5.JPG", "/assets/images/Hero/hero6.JPG"]
]


// DEFINING ABOUT
// About Page Elements
export const aboutMe: AboutType[] = [
    {header: "About", description: " Hi again, Ethan here! To learn more about myself, I decided add make files for you to checkout! To start, click on the skills⚙️.sh!"},
    {header: "Skills", description: "Come explore some of my skills and strong suits! Simply click anywhere on the terminal to play the next sequence."},
    {header: "Hobbies", description: "In my free time, I enjoy a variety of hobbies that keep me balanced and inspired. To learn more click on one of the folders on the side."}
]
// LAPTOP COMPONENT
// Laptop UI Elements
export const laptop: string = "/assets/images/About/laptopMacOS.webp"
export const finder: string = "/assets/images/About/Finder.png"

// ReadMe UI Elements
export const README_Header: string = "READ_ME DOCUMENTATION";
export const README_Intro: string = "To Start, Click On Any of The Files On The Left Under Favorites.";
export const README_Skills: string = "This is a collection of some of the skills I have acquired over the years. ";
export const README_Hobbies: string = "Come check out some of my hobbies I have outside of software on the left. ";

// Skills UI Element
const languages: TerminalItemType[] = [
    { name: "Python", image: "/assets/images/About/Terminal/python.svg", description: "My fav. programming language",rating: "[/////]" },
    { name: "Javascript", image: "/assets/images/About/Terminal/javascript.svg", description: "A dynamic language and my go-to 4 web dev", rating: "[////.]" },
    { name: "Java", image: "/assets/images/About/Terminal/java.svg", description: "The coding language I use most at school", rating: "[///..]" },
];
const devTools: TerminalItemType[] = [
    { name: "Typescript", image: "/assets/images/About/Terminal/typescript.svg", description: "Enhances code readability in projects", rating: "[///..]" },
    { name: "Next.js", image: "/assets/images/About/Terminal/nextJS.svg", description: "My favorite framework for React apps", rating: "[////.]" },
    { name: "MERN Stack", image: "/assets/images/About/Terminal/MERN.png", description: "MongoDB, ExpressJS, React, NodeJS", rating: "[///..]" },
];
const aiTools: TerminalItemType[] = [
    { name: "Pandas", image: "/assets/images/About/Terminal/pandas.svg", description: "My bread and butter for data analysis", rating: "[/////]" },
    { name: "Tensorflow", image: "/assets/images/About/Terminal/tensorflow.svg", description: "By far my favorite tool for doing AI", rating: "[///..]" },
    { name: "Jupyter/Collab", image: "/assets/images/About/Terminal/jupyter.svg", description: "Essential for any of my data science projects", rating: "[////..]" },
];
export const TerminalPages: TerminalPageType[] = [
    { name: "languages📙.sh", items: languages, command:'bash "/Users/ethan/skills ⚙️.sh"'},
    { name: "devTools 👨‍💻.sh", items: devTools, command:'bash "/Users/ethan/devSkills.sh"' },
    { name: "aiTools 🤖.sh", items: aiTools, command:'bash "/Users/ethan/aiSkills.sh"'},
]

// Hobby UI Element
/* Archived Feature */
const foodDescription: string = "";
const gymDescription: string = "";
const travelDescription: string = "";

export const hobbies: HobbyItemType[] = [
    {name: "Food 🍕.pptx", varName: "1", imageRoute: "/assets/images/About/Powerpoint/Food/", imageCount: 6, description: foodDescription},
    {name: "Da Gym 🏋️.pptx", varName: "2", imageRoute: "/assets/images/About/Powerpoint/DaGym/", imageCount: 6 , description: gymDescription},
    {name: "Traveling 🛫.pptx", varName: "3", imageRoute: "/assets/images/About/Powerpoint/Traveling/", imageCount: 9, description: travelDescription},
];


// DEFINING EXPERIENCE
export const ExperienceCards: ExperienceTimelineType[] = [
{
    title: "HBA Candidate", description: "Starting in September 2024, I will be joining Ivey Business School as an Honours in Business Administration (HBA) student where I will be diving into the thrilling intersection of business and tech! Getting to graduate with two degrees (CS and HBA) will be an exciting way for me to explore my passions in both business and tech, while joining an exciting community of entrepreneurs and like-minded individuals at Ivey!", 
    tags: ["Computer Science", "Business", "Ivey CS/HBA", "Dual Degree"], 
    image: "/assets/images/Experience/ivey.jpeg", date: "Sep 2024 - Present",
    hoverText: "The Ivey building's atrium!",
},
{
    title: "VP of Projects", description: "As VP of Projects at Western Founders’ Network (WFN) from September 2023 to May 2024, I got to lead some awesome projects, including creating the Harbour Link app (see below). Starting off as a director really set the stage for me to mentor some super talented directors and was strong highlight of my second year at Western!",
    tags: ["React Native", "Django", "Figma", "Leadership", "Product Management"], 
    image: "/assets/images/Experience/projectVP.png", date: "Sep 2023 - May 2024",
    hoverText: "Our team taking a team photo in an elevator after a long code grind",
},
{   
    title: "Summer 2023 Internship", description: "Summer 2023 at the Ontario Ministry of Transportation was a game-changer! I led a project to develop an AI tool for resume ranking, diving deep into how technology can streamline processes. This internship was a major learning experience, packed with challenges that boosted my skills in real-world tech applications. I got to explore tech ranging from DevOps and CI/CD to React and Tensorflow! " ,
    tags: ["PowerBI", "Microsoft Azure DevOps", "Tensorflow", "ReactJS"], 
    image: "/assets/images/Experience/projectIT.png", date: "May 2023 - Aug 2023",
    hoverText: "The view from my office's side window",
},
{   
    title: "First Hackathon", description: "In November 2023, I jumped into my first hackathon, Hack Western 9, where I used Python, OpenCV, and cloud technologies to solve create HoverTouch! It was a crash course in innovation and teamwork, and I loved every minute of it!", 
    tags: ["Python", "Git & GitHub", "OpenCV", "Google Cloud", "Arduino Nano"], 
    image: "/assets/images/Experience/hackathon.jpeg", date: "November 2023",
    hoverText: "My team-mate Xander testing our product: HoverTouch for Hack Western 9"
},
{   
    title: "Start of My Western CS Journey", description: "Since starting at the University of Western Ontario in September 2022, my life has been non-stop excitement. It’s been awesome meeting so many new and interesting people, sharing ideas, and pushing each other to explore beyond our limits. Every day brings new experiences and chances to grow as programmer but also as a person!    ",
     tags: ["University", "Computer Science", "First Year", "Western"], 
     image: "/assets/images/Experience/western.JPG", date: "Sep 2022 - Present",
     hoverText: "A picture from first year when my friends and I raced down UCC Hill on cafeteria trays!"
},
]

// DEFINING PROJECT || Note: longDescription might be added in the future
export const CarouselCards: CarouselCardType[] = [
    {name: "Case Comps: Dive into my case competition projects, highlighting strategic innovation and teamwork!", image:"/assets/images/Projects/Carousel/CaseComp.jpeg"},
    {name: "Misc. Projects: Come explore some of the weird side projects I am a part of!", image:"/assets/images/Projects/Carousel/MiscProject.webp"},
    {name: "AI Projects: Discover my AI projects, where machine learning meets real-world applications!", image:"/assets/images/Projects/Carousel/AIProjects.jpeg"},
    {name: "Hackathons: Look at some of the many hackathon style projects I've done!", image:"/assets/images/Projects/Carousel/Hackathons.webp"},
]

const CaseComps: ProjectType[] = [
    {
        name: "Business 1220 Case Comp", image:"/assets/images/Projects/CaseComp/BUS/cover.svg", 
        shortDescription: "The BUS 1220 case competition held by Ivey annually for freshman who take the BUS 1220 class. Semi Finalist 2023", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["Projected Financial", "Case Study", "Presentation", "Teamwork", "Ivey-backed"], link: "https://docs.google.com/presentation/d/1ggIKbyOXRPYecG7mgyK2dNJffcfyG1Sy4DxRDIMEwSo/edit?usp=sharing"
    },
    {
        name: "Product Design Sprint", image:"/assets/images/Projects/CaseComp/PDS/cover.svg", 
        shortDescription: "PDS is an annual hackathon/case competition involving prototying designs for real startups. 2nd/35 teams 2023", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["Public Speaking", "Presentation", "Figma", "UI/UX", "Mock-Up", "Prototyping"], link: "https://docs.google.com/presentation/d/1rhTYV9edkKlP0wTAkBUV17Zj8TIriQue6mVr1FzH4DY/edit?usp=sharing"
    },
    {
        name: "Tech Consulting Competition", image:"/assets/images/Projects/CaseComp/TCC/cover.svg", 
        shortDescription: "TCC is an annual case competition held by Western Founders' Network (WFN) that is sponsored by IBM. 2nd/30 teams 2023", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["Consulting", "Financial Statements", "Projections", "Case Comp", "Research"], link: "https://docs.google.com/presentation/d/1Isr-82VgMpg18tk1SQBWJwBZ2AmbsLwaQqqzx6POlGc/edit?usp=sharing"
    }
]
const MiscProjects: ProjectType[] = [
    {
        name: "HarbourLink", image:"/assets/images/Projects/MiscProjects/HarbourLink.png", 
        shortDescription: "Have you ever forgotten meeting someone before? With HarbourLink you won't need to worry!", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["React-Native", "Figma", "Django", "Product Management", "Python", "OpenCV"], link: "https://github.com/ethan-rng/contactAppV2/blob/main/README.md"
    },
    {
        name: "SpotifyBot", image:"/assets/images/Projects/MiscProjects/SpotifyBot.png", 
        shortDescription: "Spotify is expensive. Youtube has ads. Why not get rid of both with SpotifyBot?", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["React", "Flask", "RESTful APIs", "Google APIs", "HTML", "CSS", "JavaScript", "TailwindsCSS"], link: "https://github.com/ethan-rng/spotifyBot/tree/spotifyBotv3"
    },
    {
        name: "Janky Zoom", image:"/assets/images/Projects/MiscProjects/JankyZoom.png", 
        shortDescription: "Ever had an idea during a call you wanted to draw by hand? Now you can with Janky Zoom!", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["React", "GitHub", "CanvaJS", "Firebase", "HTML", "CSS", "JavaScript"], link: "https://github.com/HaoChiBao/video-test"
    },
    {
        name: "Western Dating Sim.", image:"/assets/images/Projects/MiscProjects/DatingSim.png", 
        shortDescription: "This is one's pretty self explanatory. Click here if you need help finding love! CS 2212 Project", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["Python", "GitHub", "Jira", "Pygame", "Figma", "Unit Testing", "Model View Controller"], link: "https://github.com/ethan-rng/Western-Dating-Sim"
    },
    
]
const AIProjects: ProjectType[] = [
    {
        name: "Resume ML", image:"/assets/images/Projects/AI/resumeML.png", 
        shortDescription: "Scanning resumes can be boring. Why not making it easier with AI? MTO 2023 Internship Project", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["Convolutional Neural Network", "Tensorflow", "Flask", "SQL", "React", "TailwindsCSS"], link: "https://github.com/LTCinterns2023/resumeML"
    },
    {
        name: "Data Quest", image:"/assets/images/Projects/AI/Dataquest.png", 
        shortDescription: "Credit Card Fraud is everywhere. Identity theft can ruin lives. Let's fix that with ML and data analysis! ", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: [ "Balancing Dataset", "Tensorflow","Hyperparameter Tuning", "Pandas", "Random Forest"], link: "https://devpost.com/software/fraud-be-gone?ref_content=user-portfolio&ref_feature=in_progress"
    },
    {
        name: "Speed Dial", image:"/assets/images/Projects/AI/SpeedDial.png", 
        shortDescription: "Talking to your crush can be scary. What if you could without actually? Introducing Speed Dial!", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["LangChain", "Flask", "React", "Natural Language Processing", "APIs", "Figma"], link: "https://devpost.com/software/speeddial"
    },
    {
        name: "nourishNow", image:"/assets/images/Projects/AI/nourishNow.jpg", 
        shortDescription: "Food insecurity is a pressing issue that needs to be handled seriously. Let's use AI to help fight it.", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["Long-Short Term Memory Network", "Tensorflow", "Pandas", "React", "Time Series Forecasting"], link: "https://devpost.com/software/norishnow"
    },
]
const Hackathons: ProjectType[] = [
    {
        name: "HoverTouch", image:"/assets/images/Projects/Hackathons/HoverTouch.jpeg", 
        shortDescription: "A simple hackathon project which converts your air draw messages into text with Google Cloud!", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["Google Cloud API", "Python", "OpenCV", "MediaPipe", "Arduino Nano", "GitHub"], link: "https://devpost.com/software/hovertouch"
    },
    {
        name: "Rerecorder", image:"/assets/images/Projects/Hackathons/Rerecorder.jpg", 
        shortDescription: "A new way to teach students and enthusiasts how to play the recorder with AI!", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["Python", "Flask-Socket", "SocketIO", "Eventlet", "OpenCV", "MediaPipe", "React"], link: "https://devpost.com/software/re-recorder"
    },
    {
        name: "Life180", image:"/assets/images/Projects/Hackathons/Life180.jpeg", 
        shortDescription: "Getting rid of bad habits is hard. Why not use public humiliation to help? Introducing Life180!", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["Blockchain", "Google Maps API", "React", "HTML", "CSS", "JavaScript"], link: "https://devpost.com/software/life180-oaihcw"
    },
    {
        name: "Mail Reach", image:"/assets/images/Projects/Hackathons/MailReach.jpeg", 
        shortDescription: "A better way to do send mass-emails with GPT. An Automated, Better and Faster way to email.", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["React", "JavaScript", "SMTP", "Python", "Flask", "RESTful APIs", "Figma"], link: "https://devpost.com/software/mailreach"
    }, 
    {
        name: "Eye Explore", image:"/assets/images/Projects/Hackathons/EyeExplore.jpeg", 
        shortDescription: "EyeExplore: Navigate your world with voice-guided, facial recognition tech for the visually impaired.", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["Figma", "ReactNative", "Mobile Development", "Python", "OpenCV", "Firebase"], link: "https://devpost.com/software/eyeexplore"
    },
    {
        name: "MediSafe", image:"/assets/images/Projects/Hackathons/Medisafe.png", 
        shortDescription: "MediSafe: Automatically notifies loved ones and shares vital health info in medical emergencies.", longDescription: "Case Comps: Dive into my case competition projects, highlighting str",
        tags: ["Mobile Development", "Javascript", "ReactNative", "Blockchain", "Financial Projections"], link: "https://www.canva.com/design/DAF_ntu55c0/0o-LT6jPf7zS5Aa7GKOv_g/edit?utm_content=DAF_ntu55c0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
]
export const ProjectCards: ProjectType[][] = [
    CaseComps,
    MiscProjects,
    AIProjects,
    Hackathons,
]


// DEFINING FOOTER
import Email from "../public/assets/icons/Email";
import Instagram from "../public/assets/icons/Instagram";
import Github from "../public/assets/icons/Github";
import Discord from "../public/assets/icons/Discord";
import Linkedin from "../public/assets/icons/Linkedin";

export const FooterItems: FooterType[] = [
    { platform: "Email", link: "mailto:ethan.rong@gmail.com", light: "tertiary", dark: "darkTertiary", component: Email},
    { platform: "Instagram", link: "https://www.instagram.com/ethan.rng/", light: "tertiary", dark: "darkTertiary", component: Instagram},
    { platform: "GitHub", link: "https://github.com/ethan-rng", light: "tertiary", dark: "darkTertiary", component: Github},
    { platform: "Discord", link: "https://discordapp.com/users/theallknowing.", light: "tertiary", dark: "darkTertiary", component: Discord},
    { platform: "LinkedIn", link: "https://www.linkedin.com/in/ethanrong2004/", light: "tertiary", dark: "darkTertiary", component: Linkedin},
]

