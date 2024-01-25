import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  [key: string]: any;
};

export default function StyledNavLink({ to, children, ...rest }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={to}
      className={`${
        pathname === to
          ? "text-gray-900 dark:text-gray-100"
          : "text-gray-700 dark:text-gray-400"
      }  hover:text-gray-900 hover:dark:text-gray-300 text-4xl md:text-5xl cursor-pointer `}
      {...rest}
    >
      {children}
    </Link>
  );
}
