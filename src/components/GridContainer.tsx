import React from "react";

export default function GridContainer({
  children,
  animation = "",
}: {
  children: React.ReactNode;
  animation: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-8 justify-items-center ${animation}`}
    >
      {children}
    </div>
  );
}
