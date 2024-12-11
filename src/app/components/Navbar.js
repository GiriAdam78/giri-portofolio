"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="wrapper">
      <nav className="sticky top-0 flex items-center gap-3 justify-between py-3 h-[10vh]">
        <button
          className="md:hidden inline-flex py-2 px-2 border border-slate-300 rounded-full"
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu w-4 h-4"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <Link href="/">Giri Diwa Adam</Link>
        {/* Drawer Menu */}
        <div
          className={`z-[999] fixed top-0 left-0 w-64 h-full bg-opacity-20 backdrop-blur-lg dark:bg-dark bg-white shadow-md text-dark transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center pl-3">
            <Link
              href="/"
              className=" font-body font-semibold uppercase dark:text-neutral-50"
            >
              Giri Diwa Adam
            </Link>
            <button
              className="p-4 text-dark dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x w-4 h-4"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <nav className="p-4 leading-loose">
            <ul>
              <li>
                <Link href="/" className="font-body dark:text-neutral-50">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className="font-body dark:text-neutral-50">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Projects"
                  className="font-body dark:text-neutral-50"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="font-body dark:text-neutral-50"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Drawer Menu */}
        <ul className="hidden md:flex items-center gap-3">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Projects">Projects</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
        <ThemeToggle/>
      </nav>
    </div>
  );
};

export default Navbar;
