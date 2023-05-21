import React from "react";
import { useState } from "react";
import { menu, home, aboutme, projects, contact } from "../assets/images";
import '../App.css'

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [close, setClose] = useState(true);
  const [activeTag, setActiveTag] = useState("");
  const [isRotated, setIsRotated] = useState(false);

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
          <li className="transition duration-600 bg-gray hover:bg-tertiary hover:text-black pt-3 pb-3">
            {!close ? (
              <>
                <img
                  src={icon}
                  className="inline-block mr-4 ml-3 w-10 h-10"
                />
                <span className="inline-block align-middle text-2x1 lato">
                  {tag}
                </span>
              </>
            ) : (
              <>
                <img src={icon} className="inline-block mr-4 ml-3 w-10 h-10 " />
              </>
            )}
          </li>
        </a>
      </>
    );
  };

  if (close) {
    // Sidebar is closed
    return (
      <div className="flex flex-row">
        <div
          className="z-10 h-[80vh] rounded-r-lg mt-8 w-18 left-0 bg-secondary
         text-white flex flex-col shadow-lg fixed border border-tertiary border-t-4 border-b-4 border-r-4"
        >
          <div className="ml-4 mr-4 mt-8 mb-4">
            <img
              className={`w-10 menuIcon ${isRotated ? 'rotated180':''}`}
              src={menu} 
              onClick={() => {
                setIsRotated(!isRotated);
                setClose(!close);
              }} 
            />
          </div>

          <hr className="m-1 rounded p-1 bg-white" />

          <nav>
            <ul>
              {links.map((link, index) => (
                <SidebarItem
                  key={link["tag"]}
                  tag={link["tag"]}
                  icon={link["image"]}
                  name={link["link"]}
                  active={activeLink}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );

  // Sidebar is open
  } else {
    return (
      <div
        className="z-10 h-[80vh] left-0 bg-secondary rounded-lg mt-8 text-white 
        flex flex-col shadow-lg fixed border-tertiary border-4 slideIn"
      >
        <div className="flex flex-row mt-8 mb-4">
          <img
            className={`w-10 mr-4 ml-4 rotate-180
            transform transition-all hover:rotate-0
            menuIcon ${isRotated ? 'rotated180':''}`}
            src={menu}
            onClick={() => {
              setIsRotated(!isRotated);
              setClose(!close);
            }}
          />
          <p className="lato text-gray-300 mr-11 text-3xl">Portfolio</p>
        </div>

        <hr className="m-1 rounded p-1 bg-white" />

        <nav>
          <ul>
            {links.map((link, index) => (
              <SidebarItem
                key={link["tag"]}
                tag={link["tag"]}
                icon={link["image"]}
                name={link["link"]}
                active={activeLink}
              />
            ))}
          </ul>
        </nav>
      </div>
    );
  }
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
