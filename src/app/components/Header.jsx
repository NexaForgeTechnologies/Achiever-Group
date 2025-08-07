"use client";

import { useState, useEffect } from "react";
import BtnOne from "./BtnOne";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        // Guard for SSR / safety
        if (typeof window === "undefined" || typeof document === "undefined") return;

        const navEl = document.getElementById("nav");
        if (!navEl) return;

        const onScroll = () => {
            if (window.scrollY > 0) {
                navEl.classList.add("fixed", "top-0");
            } else {
                navEl.classList.remove("fixed", "top-0");
            }
        };

        // run once to set initial state
        onScroll();
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <nav className="w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20 py-4 bg-white z-50 transition duration-300 ease-in-out" id="nav">
            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center justify-between gap-x-1">
                <Link href={'/'}>
                    <img src="favlogo.png" alt="Nexaforge-logo" className="w-30 md:w-45" />
                </Link>

                <ul className="flex items-center gap-x-5 lg:gap-x-7 h-full">
                    <Link href="/"><li className="flex items-center h-full cursor-pointer text-[#BF8933] hover:text-[#563224]">Home</li></Link>
                    {/* <Link href="/about"><li className="flex items-center h-full cursor-pointer text-[#BF8933] hover:text-[#563224]">About</li></Link> */}
                    <Link href="/ourventures"><li className="flex items-center h-full cursor-pointer text-[#BF8933] hover:text-[#563224]">Our Ventures</li></Link>
                    <Link href="/achieverValue"><li className="flex items-center h-full cursor-pointer text-[#BF8933] hover:text-[#563224]">Achiever Value Framework</li></Link>
                    <Link href="/executiveLeadership"><li className="flex items-center h-full cursor-pointer text-[#BF8933] hover:text-[#563224]">Executive Leadership</li></Link>
                </ul>

                <div className="flex items-center h-full">
                    <BtnOne name="Contact Us" href={'/contactus'}/>
                </div>
            </div>

            {/* Mobile Nav Top Bar */}
            <div className="flex xl:hidden justify-between items-center">
                <Link href={'/'}>
                    <img src="favlogo.png" alt="Nexaforge-logo" className="w-30" />
                </Link>

                <span
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-3xl cursor-pointer select-none transition text-black"
                >
                    ☰
                </span>
            </div>

            {/* Mobile Screen */}
            {
                isOpen && (
                    <section
                        className="xl:hidden fixed left-2 right-2 top-2 bottom-2 z-50
                        bg-black/30 backdrop-blur-md rounded-2xl transition-all"
                    >
                        <ul className="flex flex-col justify-start px-3 gap-y-5 text-white">
                            <div className="w-full flex justify-between items-center px-0 sm:px-5 md:px-10">
                                <BtnOne
                                    name="Contact Us"
                                    className="mt-4"
                                    bgColor="bg-transparent"
                                    textColor="text-white"
                                    borderColor="border-white"
                                    href={'/contactus'}
                                />
                                <span
                                    onClick={() => setIsOpen(false)}
                                    className="text-6xl relative pr-2 cursor-pointer select-none transition"
                                >
                                    ×
                                </span>
                            </div>

                            <Link href="/"><li onClick={() => setIsOpen(false)} className="cursor-pointer border-b border-gray-300">Home</li></Link>
                            {/* <Link href="/about"><li onClick={() => setIsOpen(false)} className="cursor-pointer border-b border-gray-300">About</li></Link> */}
                            <Link href="/ourventures"><li onClick={() => setIsOpen(false)} className="cursor-pointer border-b border-gray-300">Our Ventures</li></Link>
                            <Link href="/achieverValue"><li onClick={() => setIsOpen(false)} className="cursor-pointer border-b border-gray-300">Achiever Value Framework</li></Link>
                            <Link href="/executiveLeadership"><li onClick={() => setIsOpen(false)} className="cursor-pointer border-b border-gray-300">Executive Leadership</li></Link>
                        </ul>
                    </section>
                )
            }
        </nav>
    );
}
