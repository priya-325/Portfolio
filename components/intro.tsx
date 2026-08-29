"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import img from "@/public/PE.jpg";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[55rem] scroll-mt-[100rem] text-center sm:mb-32"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={img}
              alt="Priyanka Eshwaroju"
              width={192}
              height={192}
              quality={95}
              priority
              className="h-24 w-24 rounded-full object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-5 mt-5 px-4 text-3xl font-medium !leading-[1.4] sm:text-5xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm <span className="font-bold">Priyanka Eshwaroju.</span>
        <br />
        <span className="font-bold">Full-Stack Software Engineer</span>
      </motion.h1>

      <motion.p
        className="mx-auto mb-4 max-w-[46rem] px-4 text-base leading-7 text-gray-700 sm:text-lg dark:text-white/75"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.05,
        }}
      >
        I build and deploy end-to-end web applications using{" "}
        <span className="font-semibold">
          React.js, TypeScript, Node.js, Express.js and PostgreSQL
        </span>
        , with hands-on experience building{" "}
        <span className="font-semibold">AI-powered applications</span> using
        LangChain, LLM APIs, embeddings and vector databases.
      </motion.p>

      <motion.p
        className="mx-auto mb-8 max-w-[44rem] px-4 text-sm leading-6 text-gray-600 sm:text-base dark:text-white/60"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.08,
        }}
      >
        3+ years of software development experience across full-stack product
        development, REST APIs, authentication, databases, cloud infrastructure
        and production deployment.
      </motion.p>

      <motion.div
        className="mb-5 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        <span className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Open to Software Engineer & Full-Stack Developer opportunities
        </span>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.12,
        }}
      >
        <Link
          href="#projects"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-105 hover:bg-gray-950 focus:scale-105 active:scale-100 dark:bg-gray-50 dark:text-gray-950"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        >
          View my work
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-105 focus:scale-105 active:scale-100 borderBlack dark:bg-white/10"
          href="/PriyankaEshwarojuResume.pdf"
          download
        >
          Download Resume
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>

        <a
          className="flex items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.1] hover:text-gray-950 focus:scale-[1.1] active:scale-100 borderBlack dark:bg-white/10 dark:text-white/70"
          href="https://www.linkedin.com/in/priyanka-eshwaroju"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Priyanka Eshwaroju on LinkedIn"
        >
          <BsLinkedin />
        </a>

        <a
          className="flex items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.1] hover:text-gray-950 focus:scale-[1.1] active:scale-100 borderBlack dark:bg-white/10 dark:text-white/70"
          href="https://github.com/priya-325"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Priyanka Eshwaroju on GitHub"
        >
          <FaGithubSquare />
        </a>
      </motion.div>

      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-3 px-4 text-sm text-gray-600 dark:text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
      >
        <span className="rounded-full bg-white px-4 py-2 borderBlack dark:bg-white/10">
          React.js
        </span>

        <span className="rounded-full bg-white px-4 py-2 borderBlack dark:bg-white/10">
          TypeScript
        </span>

        <span className="rounded-full bg-white px-4 py-2 borderBlack dark:bg-white/10">
          Node.js
        </span>

        <span className="rounded-full bg-white px-4 py-2 borderBlack dark:bg-white/10">
          PostgreSQL
        </span>

        <span className="rounded-full bg-white px-4 py-2 borderBlack dark:bg-white/10">
          LangChain
        </span>

        <span className="rounded-full bg-white px-4 py-2 borderBlack dark:bg-white/10">
          AWS
        </span>
      </motion.div>
    </section>
  );
}
