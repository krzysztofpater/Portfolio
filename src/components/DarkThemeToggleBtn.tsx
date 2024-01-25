"use client";
import useDarkMode from "@/app/hooks/useDarkMode";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function DarkThemeToggleBtn() {
  const { isDark, setIsDark } = useDarkMode();

  const handleClick = () => {
    setIsDark((curr) => !curr);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={handleClick}
      className="text-5xl text-gray-900 dark:text-gray-300 absolute top-0 left-0 p-4 z-[1000]"
    >
      {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
}
