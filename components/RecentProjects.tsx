import React from "react";
import { projects } from "@/data";

import Link from "next/link";
import Image from "next/image";
import {  FaArrowUpRightDots, FaArrowUpRightFromSquare } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="pt-4 max-w-7xl mx-auto w-full px-20 text-lg text-gray-400 flex flex-col gap-6" id='projects'>
     {projects.map((project, index) => (
      <div className="border border-gray-700 w-full lg:h-[90vh] rounded-xl p-10" key={index}>
    <Link href={project.link} className="flex flex-row gap-2 hover:text-teal-300 text-xl">{project.title} <span><FaArrowUpRightDots /></span></Link>
    <p>{project.des}</p>
  </div>
     ))} 
  
</div>

    
  );
};

export default RecentProjects;
