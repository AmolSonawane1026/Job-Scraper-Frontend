"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-md py-3 px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/Images/Logo.png"
            alt="JobScraper Logo"
            width={180}
            height={180}
          />
        </Link>
      </div>

      {/* Center: Nav Items (Desktop) */}
      <div className="hidden md:flex gap-8">
        <Link href="/">
          <span
            className="text-gray-700 font-medium cursor-pointer hover:text-[var(--color-secondary)] transition-colors duration-200"
          >
            Home
          </span>
        </Link>
        <Link href="/about">
          <span
            className="text-gray-700 font-medium cursor-pointer hover:text-[var(--color-secondary)] transition-colors duration-200"
          >
            About
          </span>
        </Link>
        <Link href="/contact">
          <span
            className="text-gray-700 font-medium cursor-pointer hover:text-[var(--color-secondary)] transition-colors duration-200"
          >
            Contact
          </span>
        </Link>
        <Link href="/help">
          <span
            className="text-gray-700 font-medium cursor-pointer hover:text-[var(--color-secondary)] transition-colors duration-200"
          >
            Help
          </span>
        </Link>
      </div>

      {/* Right: Login Button (Desktop only) */}
      <div className="hidden md:flex items-center">
        <Link href="/login">
          <button
            className="text-white px-5 py-2 rounded-md font-semibold transition w-[100px] bg-[var(--color-secondary)]"
          >
            Login
          </button>
        </Link>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden flex flex-col justify-center items-center ml-4"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-6 bg-gray-700 rounded-sm transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-gray-700 rounded-sm my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-gray-700 rounded-sm transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu with smooth transition and left-aligned nav items */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start py-4 md:hidden z-50 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
        style={{ minHeight: menuOpen ? "180px" : "0px" }}
      >
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <span
            className="block py-2 px-6 text-gray-700 font-medium cursor-pointer hover:text-[var(--color-secondary)] transition-colors duration-200"
          >
            Home
          </span>
        </Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>
          <span
            className="block py-2 px-6 text-gray-700 font-medium cursor-pointer hover:text-[var(--color-secondary)] transition-colors duration-200"
          >
            About
          </span>
        </Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          <span
            className="block py-2 px-6 text-gray-700 font-medium cursor-pointer hover:text-[var(--color-secondary)] transition-colors duration-200"
          >
            Contact
          </span>
        </Link>
        <Link href="/help" onClick={() => setMenuOpen(false)}>
          <span
            className="block py-2 px-6 text-gray-700 font-medium cursor-pointer hover:text-[var(--color-secondary)] transition-colors duration-200"
          >
            Help
          </span>
        </Link>
        <Link href="/login" onClick={() => setMenuOpen(false)}>
          <button
            className="mt-2 ml-6 text-white px-5 py-2 rounded-md font-semibold transition w-auto bg-[var(--color-secondary)]"
          >
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
