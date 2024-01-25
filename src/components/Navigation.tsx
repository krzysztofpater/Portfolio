"use client";

import Link from "next/link";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import useHandleResize from "@/utils/useHandleResize";
import { HiOutlineHome } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import StyledNavLink from "./StyledNavLink";
import DarkThemeToggleBtn from "./DarkThemeToggleBtn";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useHandleResize(setIsOpen);

  return (
    <nav className="">
      <DarkThemeToggleBtn />
      <ul className="hidden md:flex flex-row justify-end items-center gap-8 p-4 absolute top-0 right-0 z-[100] bg-gray-50 opacity-80 backdrop-blur-sm w-full dark:bg-inherit dark:backdrop-blur-0 dark:backdrop-brightness-100">
        <li>
          <StyledNavLink to="/">
            <HiOutlineHome />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">O mnie</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
        </li>
      </ul>
      <div className="absolute top-0 right-0 z-[1000] md:hidden flex flex-row justify-end p-4 text-gray-800 dark:text-gray-400   hover:text-gray-900 hover:dark:text-gray-300">
        <Hamburger size={36} toggled={isOpen} toggle={setIsOpen} />
      </div>
      {isOpen && (
        <div className="flex flex-col items-end gap-4 md:hidden absolute z-[100] top-0 right-0 w-[80svw] h-svh pt-[6rem] pr-4 bg-gray-50 opacity-80 backdrop-blur-sm dark:bg-inherit dark:backdrop-blur-sm dark:backdrop-brightness-100">
          <StyledNavLink to="/" onClick={() => setIsOpen(false)}>
            <HiOutlineHome />
          </StyledNavLink>

          <StyledNavLink to="/about" onClick={() => setIsOpen(false)}>
            O mnie
          </StyledNavLink>

          <StyledNavLink to="/portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </StyledNavLink>
        </div>
      )}
    </nav>
  );
}
