"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  let animationIndex = 0;

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Technical Skills</SectionHeading>

      <p className="mx-auto -mt-5 mb-10 max-w-[40rem] text-gray-600 dark:text-white/60">
        Technologies and tools I use to build, test and deploy production
        applications.
      </p>

      <div className="space-y-8">
        {skillsData.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              {group.category}
            </h3>

            <ul className="flex flex-wrap justify-center gap-2 text-base text-gray-800">
              {group.skills.map((skill) => {
                const currentIndex = animationIndex++;

                return (
                  <motion.li
                    className="rounded-xl bg-white px-5 py-3 borderBlack dark:bg-white/10 dark:text-white/80"
                    key={skill}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={currentIndex}
                  >
                    {skill}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
