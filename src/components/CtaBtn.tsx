import { log } from "console";
import Link from "next/link";
import React from "react";

export default function CtaBtn({
  to,
  color = "white",
  ...rest
}: {
  to: string;
  color?: string;
  [key: string]: any;
}) {
  return (
    <button
      className={`absolute bottom-[12vh] left-[50%] translate-x-[-50%] translate-y-[-50%] px-6 py-3 font-bold text-xl md:text-2xl text-gray-100 shadow-lg rounded-xl ${color}`}
      {...rest}
    >
      <Link href={to}>Zobacz projekty</Link>
    </button>
  );
}
