import React from "react";
import { useState } from "react";
import {
  close,
  menu,
  home,
  aboutme,
  projects,
  contact,
} from "../assets/images";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const links = [
    { image: home, tag: "Home", link: "/" },
    { image: aboutme, tag: "About Me", link: "/" },
    { image: projects, tag: "Projects", link: "/" },
    { image: contact, tag: "Contact", link: "/" },
  ];

  const SidebarItem = ({ tag, icon, name, active }) => {
    return (
      <>
        <a
          href={name}
          onClick={() => setActiveLink(tag)}
          className="hover:text-black"
        >
          <li className="transition duration-600 bg-primary hover:bg-secondary hover:text-black pt-3 pb-3">
            <img src={icon} className="inline-block mr-4 ml-3 w-10 h-10"></img>
            <span className="inline-block align-middle text-2x1">{tag}</span>
          </li>
        </a>
      </>
    );
  };

  return (
    <div className="h-full p-10 bg-gray-100 text-cyan-200">
      <p>
        asfadsf
      </p>
      <nav>
        <ul>



        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

/*
{links.map((link, index) => (
  <SidebarItem
    key={link["tag"]}
    tag={link["tag"]}
    icon={link["image"]}
    name={link["link"]}
    active={activeLink}
  />
))}
*/