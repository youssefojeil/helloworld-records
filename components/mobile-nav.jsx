'use client';
import React, { useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={` lg:hidden fixed bottom-0 left-0 z-[9998] w-full flex flex-col items-center ${
        isOpen ? 'h-full' : ''
      }`}
    >
      <div
        className={`w-full flex items-end transition-opacity duration-200 ${
          isOpen ? 'opacity-100 flex-grow' : 'opacity-0'
        }`}
      >
        <ul
          className={`w-full max-h-full overflow-y-auto p-4 space-y-4 text-2xl font-bold uppercase text-[#ebecef] ${
            isOpen ? 'block' : 'hidden'
          } bg-[#222]`}
        >
          <li>
            <a href="#0" className="block text-gray-100 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#0" className="block text-gray-100 hover:text-white">
              About me
            </a>
          </li>
          <li>
            <a href="#0" className="block text-gray-100 hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#0" className="block text-gray-100 hover:text-white">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#0" className="block text-gray-100 hover:text-white">
              Blog
            </a>
          </li>
          <li>
            <a href="#0" className="block text-gray-100 hover:text-white">
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <button
        className="relative flex-none w-[6.25rem] h-[calc(6.25rem/2)] isolate"
        type="button"
        aria-controls="cdpn-mobile-menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-7 h-5">
          <span
            className={`block absolute w-full h-1 bg-[#fff] rounded-sm ${
              isOpen ? 'top-1/2 transform rotate-45' : 'top-0'
            }`}
          ></span>
          <span
            className={`block absolute w-full h-1 bg-[#fff] rounded-sm ${
              isOpen ? 'hidden' : 'top-1/2 transform -translate-y-1/2'
            }`}
          ></span>
          <span
            className={`block absolute w-full h-1 bg-[#fff] rounded-sm ${
              isOpen ? 'top-1/2 transform -rotate-45' : 'bottom-0'
            }`}
          ></span>
        </span>
        <span
          className={`absolute left-1/2 bottom-[0.5em] transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#222] border border-[#222] z-[-1] ${
            isOpen
              ? 'transform translate-x-[-50vh] translate-y-[-50vh] scale-150 transition-transform duration-1000'
              : ''
          }`}
        ></span>
      </button>
    </nav>
  );
}
