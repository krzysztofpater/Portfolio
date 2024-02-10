import { HiOutlineHome } from "react-icons/hi2";
import StyledNavLink from "./StyledNavLink";
import DarkThemeToggleBtn from "./DarkThemeToggleBtn";
import MobileNav from "./MobileNav";

export default function Navigation() {
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

      <MobileNav />
    </nav>
  );
}
