"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[48rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-4">
        I'm a{" "}
        <span className="font-semibold">Full-Stack Software Engineer</span> with
        3+ years of experience building and deploying end-to-end web
        applications across frontend, backend, databases and cloud environments.
      </p>

      <p className="mb-4">
        My primary stack includes{" "}
        <span className="font-semibold">
          React.js, TypeScript, Node.js, Express.js, PostgreSQL and Supabase
        </span>
        . I have hands-on experience developing responsive user interfaces,
        designing REST APIs, implementing authentication and authorization,
        modelling relational databases, debugging, testing and deploying
        production applications.
      </p>

      <p className="mb-4">
        I'm also building{" "}
        <span className="font-semibold">AI-enabled applications</span> using
        LangChain, LLM APIs, Retrieval-Augmented Generation, embeddings and
        vector databases. I enjoy solving problems across the complete product
        stack rather than focusing on only one layer of an application.
      </p>

      <p className="mb-4">
        I hold a{" "}
        <span className="font-semibold">
          Master of Science in Computer Science
        </span>{" "}
        from the University of Dundee and a Bachelor of Engineering in Computer
        Science and Engineering from Osmania University.
      </p>

      <p>
        I'm currently open to{" "}
        <span className="font-semibold">
          Software Engineer and Full-Stack Developer opportunities
        </span>{" "}
        where I can contribute to production applications, scalable systems and
        modern AI-powered products.
      </p>
    </motion.section>
  );
}
