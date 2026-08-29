"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>Featured Projects</SectionHeading>

      <p className="mx-auto -mt-5 mb-10 max-w-[42rem] text-center text-gray-600 dark:text-white/60">
        Full-stack and AI-powered applications I've designed, developed and
        deployed.
      </p>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
