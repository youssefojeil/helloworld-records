"use client";
import React from "react";
import { NavbarMenu } from "@/components/ui/navbar-menu";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const Navbar = () => {
  const navItems = [
    {
      name: "HelloWorld",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Releases",
      link: "/releases",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Artists",
      link: "/artists",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Playlists",
      link: "#",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <NavbarMenu navItems={navItems} />
    </div>
  );
};

export default Navbar;
