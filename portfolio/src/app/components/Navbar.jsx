"use client";
import React, { useState } from "react";
import Link from "next/link"
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "About",
        path: "#about", 
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav class="flex top-0 left-0 right-0 z-10 bg-[#CACAEC] bg-opacity-90">
            <div class="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-4 py-2 w-[90%]">
                <Link 
                href={"/"} 
                class= "text-1xl md:text-2xl text-black font-semibold">
                    Ym
                </Link>
                <div class="mobile-menu block md:hidden justify-between">
                    {
                        !navbarOpen ? (
                        <button  onClick={() => setNavbarOpen(true)}  class="text-black items-center px-3 py-2 border rounded border-slate-200 hover:text-black hover:border-white">
                            <Bars3Icon  class="h-5 w-5"/>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)}  class="text-black items-center px-3 py-2 border rounded border-slate-200 hover:text-black hover:border-white">
                            <XMarkIcon  class="h-5 w-5"/>
                        </button>
                    )
                }
                </div>
                <div class="menu hidden md:block md:w-auto" id="navbar">
                    <ul class="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title ={link.title}/>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            { navbarOpen ? <MenuOverlay links={navLinks}/>: null }
        </nav>
    );
}
export default Navbar;


