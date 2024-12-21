"use client"
import "../Navbar/navbar.css" ; 

import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="navbar-logo">
                Ansharah
              </Link>
            </div>
          </div>
          <div className="navbar-links-desktop">
            <Link href="/" className="nav-item">
              Home
            </Link>
            <Link href="/about" className="nav-item">
              About
            </Link>
            <Link href="/Projects" className="nav-item">
              Projects
            </Link>
            <Link href="/Services" className="nav-item">
              Services
            </Link>
            <Link href="/Contact" className="nav-item">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="navbar-toggle"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h15m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isClick && (
          <div className="navbar-menu">
            <Link href="/" className="nav-item">
              Home
            </Link>
            <Link href="/about" className="nav-item">
              About
            </Link>
            <Link href="/Projects" className="nav-item">
              Projects
            </Link>
            <Link href="/Services" className="nav-item">
              Services
            </Link>
            <Link href="/Contact" className="nav-item">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
