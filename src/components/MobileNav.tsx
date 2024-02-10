"use client";

import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import useHandleResize from "@/utils/useHandleResize";
import StyledNavLink from "./StyledNavLink";
import { HiOutlineHome } from "react-icons/hi2";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useHandleResize(setIsOpen);

  return (
    <>
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
    </>
  );
}
