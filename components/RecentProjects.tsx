import React from "react";
import { projects } from "@/data";

import Link from "next/link";
import Image from "next/image";
import {  FaArrowUpRightFromSquare } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id='projects'>
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-col gap-8 p-4 mt-10 w-[93vw] mx-auto">
  {projects.map(({ id, title, des, img, iconLists, link }, index) => (
    <div
      key={id}
      className="lg:min-h-[32.5rem] h-[35.5rem] flex flex-col lg:flex-row rounded-2xl shadow-lg overflow-hidden"
    >
      {/* Left Section */}
      <div className="text-white bg-black w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 p-6">
        <h1 className="font-bold text-2xl lg:text-4xl pt-4 text-purple flex items-center gap-2  ">
        {title} {<Link href={link} target='_blank'><FaArrowUpRightFromSquare /></Link>}
        </h1>
        <br className="hidden lg:block" />
        <p className="text-lg lg:text-3xl italic tracking-wide">{des}</p>
        <br className="hidden lg:block"/>
        <div className="flex gap-4 sm:gap-8 flex-wrap">
          {iconLists.map((list, idx) => (
            <div
              key={idx}
              className="border border-white rounded-2xl py-2 px-4 lg:py-1 lg:px-6 text-sm lg:text-base"
            >
              {list}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full h-full lg:w-1/2 relative">
        <Image
          src={img}
          alt="project Image"
          layout="fill"
          className="object-cover"
        />
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default RecentProjects;
