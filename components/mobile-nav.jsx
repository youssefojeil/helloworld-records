"use client";
import React, { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "./navbar";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="lg:hidden fixed top-0 right-0 z-[9998] w-full h-full flex flex-col items-end">
      {/* Menu List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#222] flex flex-col items-center justify-center"
          >
            <ul className="w-full h-full flex flex-col items-center justify-center p-4 space-y-4 text-2xl font-bold uppercase text-[#ebecef]">
              {navItems.map((navItem, index) => (
                <li key={index}>
                  <a
                    href={navItem.link}
                    className="block text-gray-100 hover:text-white"
                  >
                    {navItem.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        className="absolute top-4 right-4 z-20"
        type="button"
        aria-controls="cdpn-mobile-menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <IconX size={32} className="text-white" />
        ) : (
          <IconMenu2 size={32} className="text-white" />
        )}
      </button>
    </nav>
  );
}
