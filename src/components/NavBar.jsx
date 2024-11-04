import React, { createElement, useState } from 'react'
import { content } from '../Content';
import { HiMenuAlt2 } from 'react-icons/hi'

export default function NavBar() {
    const { nav } = content;
    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState(0);
    return (
        <div className='w-full flex justify-center'>
            <div className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2 ">
                <HiMenuAlt2 size={34} onClick={() => setShowMenu(!showMenu)} />
            </div>
            <nav className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop:blur-md rounded-full text-dark_primary duration-300 ${showMenu ? 'md:bottom-10 bottom-32' : 'bottom-[-100%]'}`}>
                {
                    nav.map((item, i) => {
                        return (
                            <a href={item.link}
                                key={i}
                                onClick={() => setActive(i)}
                                className={`text-xl ${i === active && 'bg-dark_primary text-white'} p-2.5   rounded-full sm:cursor-pointer`}>
                                {createElement(item.icon)}
                            </a>
                        )
                    })
                }
            </nav>
        </div>
    )
}