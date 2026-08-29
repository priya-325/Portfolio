"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  demoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-8 last:mb-0"
    >
      <section className="relative max-w-[50rem] overflow-hidden rounded-xl border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:min-h-[22rem]">
        <div className="flex h-full flex-col px-5 pb-7 pt-6 sm:max-w-[55%] sm:px-8 sm:py-8 sm:group-even:ml-[45%]">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-gray-950 dark:bg-white dark:text-gray-900"
              >
                Live Demo
                <FiExternalLink />
              </a>
            )}

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:scale-105 hover:bg-gray-50 dark:border-white/20 dark:bg-white/10 dark:text-white"
            >
              <FaGithub />
              GitHub
            </a>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2 sm:mt-auto sm:pt-5">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.68rem] uppercase tracking-wider text-white dark:text-white/80"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={`${title} project screenshot`}
          width={700}
          height={450}
          quality={95}
          className="mt-2 w-full rounded-t-lg shadow-2xl transition sm:absolute sm:-right-48 sm:top-12 sm:mt-0 sm:w-[30rem] sm:group-even:-left-48 sm:group-even:right-[initial] sm:group-hover:-translate-x-3 sm:group-hover:translate-y-2 sm:group-hover:-rotate-2 sm:group-hover:scale-[1.03] sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
}
