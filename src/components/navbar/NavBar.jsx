import React, { createElement, useState } from "react";
import { nav } from "./NavBarData";

import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import DarkMode from "./DarkMode";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className="w-full flex justify-center z-50 relative  dark:text-white duration-200">
      <div className="sm:cursor-pointer absolute flex justify-between sm:w-80  w-32 top-4 sm:top-10 left-2 sm:left-10 z-[999] rounded-lg bg-white/20 p-2 ">
{
  showMenu ? <IoClose className="bg-white dark:bg-white/20"
          size={34}
          onClick={() => setShowMenu(!showMenu)}/> : <HiMenuAlt2
          className="bg-white dark:bg-white/20"
          size={34}
          onClick={() => setShowMenu(!showMenu)}
        />
}

        
        <DarkMode />
      </div>
      <nav
        className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop:blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "md:bottom-2 bottom-2" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => {
          return (
            <a
              href={item.link}
              key={i}
              onClick={() => setActive(i)}
              className={`text-xl ${
                i === active && "bg-dark_primary text-white"
              } p-2.5   rounded-full sm:cursor-pointer`}
            >
              {createElement(item.icon)}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
