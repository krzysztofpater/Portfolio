import React from "react";

export default function SubpageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-gray-900 dark:text-gray-300 pt-[8rem] min-h-[100svh] max-w-7xl mx-auto px-4 lg:px-8">
      {children}
    </div>
  );
}
