"use client";

import { useEffect, useState } from "react";
import { About } from "@/components/About";
import RecentProjects from "@/components/RecentProjects";

const Home = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <main className="bg-black-100 text-white flex min-h-screen ">
      {/* Sidebar */}
      <div className="w-1/2 h-screen sticky top-0 flex flex-col justify p-28">
        <h1 className="text-5xl font-bold">Ugochukwu Victor</h1>
        <p className="text-3xl font-semibold text-slate-100 pt-3">
          Frontend web developer
        </p>
        <p className="pr-10 text-gray-400 text-xl pt-5">
          I build beautiful and responsive sites and applications for the web using the best technologies.
        </p>
        
        {/* Navigation */}
        <ul className="pt-16 flex flex-col gap-6 text-lg">
          <li
            className={`cursor-pointer ${
              activeSection === "about" ? "text-white font-semibold " : "text-gray-400"
            }`}
            onClick={() =>
              document.getElementById("about").scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "projects" ? "text-white font-semibold" : "text-gray-400"
            }`}
            onClick={() =>
              document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </li>
        </ul>
      </div>

      {/* Content Sections */}
      <div className="w-1/2 flex flex-col gap-16  ">
        <section id="about" className="min-h-screen flex   ">
          <About />
        </section>
        <section id="projects" className="min-h-screen flex ">
          <RecentProjects />
        </section>
      </div>
    </main>
  );
};

export default Home;
