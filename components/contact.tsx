"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,42rem)] scroll-mt-28 text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Let's Work Together</SectionHeading>

      <p className="-mt-6 leading-7 text-gray-700 dark:text-white/80">
        I'm currently open to{" "}
        <span className="font-semibold">
          Software Engineer and Full-Stack Developer opportunities.
        </span>
        <br />
        If you're hiring or would like to discuss an opportunity, I'd love to
        hear from you.
      </p>

      <p className="mt-4 text-gray-700 dark:text-white/80">
        Email me at{" "}
        <a
          className="font-medium underline"
          href="mailto:priyankaeshwaroju325@gmail.com"
        >
          priyankaeshwaroju325@gmail.com
        </a>
      </p>

      <div className="mt-5 flex justify-center gap-3">
        <a
          href="https://www.linkedin.com/in/priyanka-eshwaroju"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium transition hover:scale-105 borderBlack dark:bg-white/10"
        >
          <BsLinkedin />
          LinkedIn
        </a>

        <a
          href="https://github.com/priya-325"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium transition hover:scale-105 borderBlack dark:bg-white/10"
        >
          <FaGithub />
          GitHub
        </a>
      </div>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Message sent successfully!");

          if (emailRef.current) {
            emailRef.current.value = "";
          }

          if (messageRef.current) {
            messageRef.current.value = "";
          }
        }}
      >
        <input
          ref={emailRef}
          className="h-14 rounded-lg px-4 transition-all borderBlack dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />

        <textarea
          ref={messageRef}
          className="my-3 h-52 rounded-lg p-4 transition-all borderBlack dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
}
