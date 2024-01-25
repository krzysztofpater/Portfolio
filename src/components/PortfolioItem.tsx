import Image from "next/image";
import React from "react";

//
type DataItem = {
  data: { [key: string]: string };
};

export default function PortfolioItem({ data }: DataItem) {
  return (
    <div className="flex flex-col gap-4 py-6 px-4  rounded-lg group transform transition-all ease-in-out duration-200 hover:shadow-[5px_5px_40px] hover:shadow-gray-400 dark:hover:shadow-gray-800">
      <div className="relative h-[300px] w-[92%] mx-auto overflow-hidden rounded">
        <Image
          src={data.img}
          alt="portfolio image"
          fill
          className=" object-cover object-top opacity-70 group-hover:opacity-100 transition-all ease-in-out duration-200"
        />
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <h3 className="text-2xl text-center m-4">{data.name}</h3>
        <p className="text-xl">{data.description}</p>
        <p className="mt-auto">
          <span>Repozytorium: </span>
          <a href={data.repoUrl} target="_blank" className="text-indigo-500">
            {data.repoUrl}
          </a>
        </p>
        <p>
          <span>Działający projekt: </span>
          <a href={data.url} target="_blank" className="text-indigo-500">
            {data.url}
          </a>
        </p>
      </div>
    </div>
  );
}
